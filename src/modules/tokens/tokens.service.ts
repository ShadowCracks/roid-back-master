import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Token, TokenDocument } from './token.schema';
import { TokenDto, TokenQueryDto, UpdateTokenDto } from './dto/token.dto';
import { CreateTokenDto, GrantTokenDto } from './dto/create-token.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import { OnEvent } from '@nestjs/event-emitter';
import { Events } from '../users/types/user.types';
import { getTokenCreditsAggregation } from './aggregations/token.aggregations';
import { GranterType, TokenType } from './token-types';

@Injectable()
export class TokensService extends CrudService<
  TokenDto,
  CreateTokenDto,
  TokenQueryDto,
  UpdateTokenDto
> {
  constructor(
    @InjectModel(Token.name) readonly tokenModel: Model<TokenDocument>,
  ) {
    super(tokenModel, TokenDto);
  }

  @OnEvent(Events.REGISTER_SUCCESS)
  private async grantRegistrationToken(createTokenDto: CreateTokenDto) {
    await this.create(createTokenDto);
  }

  async grantTokens(grantTokenDto: GrantTokenDto) {
    grantTokenDto.type = TokenType.KARMA_POINT;
    grantTokenDto.granterType = GranterType.REGULAR_USER;

    const session = await this.tokenModel.startSession();
    session.startTransaction();

    try {
      const granterAggregation = getTokenCreditsAggregation(
        grantTokenDto.granterId,
      );
      const [result] = await this.tokenModel.aggregate(granterAggregation);
      const { totalTokens } = result;

      if (grantTokenDto.amount > totalTokens) {
        throw new Error('Insufficient tokens');
      } else {
        const token = new this.tokenModel(grantTokenDto);
        await token.save({ session });
        await session.commitTransaction();
        return {
          status: 'success',
          message: 'Token Sent',
        };
      }
    } catch (ex) {
      await session.abortTransaction();
      throw new HttpException(ex.message, HttpStatus.NOT_ACCEPTABLE);
    } finally {
      session.endSession();
    }
  }
}
