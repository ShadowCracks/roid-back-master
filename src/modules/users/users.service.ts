import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { plainToClass } from 'class-transformer';
import { UserDto, UserQueryDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { getErrorMessage } from 'src/@common/utilities/mongodb-parser';
import { CreateUserDto } from './dto/create-user.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Events } from './types/user.types';
import { CreateTokenDto } from '../tokens/dto/create-token.dto';
import {
  GranterType,
  REGISTER_TOKEN_AMOUNT,
  TokenType,
} from '../tokens/token-types';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) readonly userModel: Model<UserDocument>,
    private eventEmitter: EventEmitter2,
  ) {}

  async findOne(queryDto: UserQueryDto): Promise<UserDto> {
    try {
      const user = await this.userModel.findOne(queryDto);
      if (!user) {
        throw new Error(`${this.userModel.modelName} not found`);
      }
      return plainToClass(UserDto, user.toObject());
    } catch (ex) {
      throw new HttpException(
        getErrorMessage(ex),
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    try {
      const userRepository = new this.userModel(createUserDto);
      const result = await userRepository.save();

      const userDto = plainToClass(UserDto, result.toObject());

      const createTokenDto: CreateTokenDto = {
        receiverId: userDto._id,
        amount: REGISTER_TOKEN_AMOUNT,
        granterType: GranterType.SYSTEM,
        type: TokenType.KARMA_POINT,
      };

      this.eventEmitter.emit(Events.REGISTER_SUCCESS, createTokenDto);

      return userDto;
    } catch (ex) {
      throw new HttpException(
        getErrorMessage(ex),
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
