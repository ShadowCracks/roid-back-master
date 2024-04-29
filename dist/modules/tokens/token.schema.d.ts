/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { GranterType, TokenType } from './token-types';
export type TokenDocument = Token & mongoose.Document;
export declare class Token extends Base {
    type: TokenType;
    amount: number;
    granterType: GranterType;
    receiverId: mongoose.Types.ObjectId;
    granterId: mongoose.Types.ObjectId;
}
export declare const TokenSchema: mongoose.Schema<Token, mongoose.Model<Token, any, any, any, mongoose.Document<unknown, any, Token> & Token & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Token, mongoose.Document<unknown, {}, mongoose.FlatRecord<Token>> & mongoose.FlatRecord<Token> & {
    _id: mongoose.Types.ObjectId;
}>;
