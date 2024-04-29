import {
  EnumField,
  NumberField,
  StringField,
  StringFieldOptional,
} from 'src/@common/decorators/field.decorators';
import { GranterType, TokenType } from '../token-types';

export class CreateTokenDto {
  @StringField({ swagger: true })
  receiverId: string;

  @EnumField(() => GranterType, { swagger: true })
  granterType: GranterType;

  @EnumField(() => TokenType, { swagger: true })
  type: TokenType;

  @StringFieldOptional({ swagger: true })
  granterId?: string;

  @NumberField({ swagger: true })
  amount: number;
}

export class GrantTokenDto {
  @StringField({ swagger: true })
  receiverId: string;

  @NumberField({ swagger: true })
  amount: number;

  granterType!: GranterType;
  granterId!: string;
  type!: TokenType;
}
