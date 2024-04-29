import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  EnumField,
  NumberField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { GranterType, TokenType } from '../token-types';

export class TokenDto extends BaseDto {
  @StringField({ swagger: true })
  receiverId: string;

  @StringField({ swagger: true })
  granterId: string;

  @EnumField(() => TokenType)
  type: TokenType;

  @EnumField(() => GranterType, { swagger: true })
  granterType: GranterType;

  @NumberField({ swagger: true })
  amount: string;
}

export class UpdateTokenDto extends PartialType(
  OmitType(TokenDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class TokenQueryDto extends PartialType(
  OmitType(TokenDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
