import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { User } from '../users/user.schema';
import { GranterType, TokenType } from './token-types';

export type TokenDocument = Token & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Token extends Base {
  @Prop({
    type: String,
    required: true,
    enum: [TokenType.KARMA_POINT],
    default: TokenType.KARMA_POINT,
  })
  type: TokenType;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({
    type: String,
    required: true,
    enum: [GranterType.SYSTEM, GranterType.REGULAR_USER],
  })
  granterType: GranterType;

  @Prop({ type: ObjectId, ref: User.name, required: true })
  receiverId: mongoose.Types.ObjectId;

  @Prop({ type: ObjectId, ref: User.name, required: false })
  granterId: mongoose.Types.ObjectId;
}

export const TokenSchema = SchemaFactory.createForClass(Token);

TokenSchema.pre('save', function (next) {
  next();
});
