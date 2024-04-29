import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenPayloadDto } from './dto/token-payload.dto';
import { type UserLoginDto } from './dto/user-login.dto';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { TokenType } from 'src/app.constants';
import { RoleType } from '../users/types/user.types';
import { plainToClass } from 'class-transformer';
import { UserDto } from '../users/dto/user.dto';
import { validateHash } from 'src/@common/utilities/utils';

@Injectable()
export class AuthenticationService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UsersService,
  ) {}

  async createAccessToken(data: {
    role: RoleType;
    userId: string;
  }): Promise<TokenPayloadDto> {
    return {
      expiresIn: 60000,
      accessToken: await this.jwtService.signAsync({
        userId: data.userId,
        type: TokenType.ACCESS_TOKEN,
        role: data.role,
      }),
    };
  }

  async validateUser(userLoginDto: UserLoginDto): Promise<UserDto> {
    const user = await this.userService.userModel.findOne({
      email: userLoginDto.usernameOrEmail,
    });
    const isPasswordValid = await validateHash(
      userLoginDto.password,
      user?.password,
    );

    if (!isPasswordValid) {
      throw new NotFoundException({ error: 'Invalid Credentials' });
    }
    return plainToClass(UserDto, user.toObject());
  }
}
