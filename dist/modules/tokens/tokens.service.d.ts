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
import { TokenDocument } from './token.schema';
import { TokenDto, TokenQueryDto, UpdateTokenDto } from './dto/token.dto';
import { CreateTokenDto, GrantTokenDto } from './dto/create-token.dto';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
export declare class TokensService extends CrudService<TokenDto, CreateTokenDto, TokenQueryDto, UpdateTokenDto> {
    readonly tokenModel: Model<TokenDocument>;
    constructor(tokenModel: Model<TokenDocument>);
    private grantRegistrationToken;
    grantTokens(grantTokenDto: GrantTokenDto): Promise<{
        status: string;
        message: string;
    }>;
}
