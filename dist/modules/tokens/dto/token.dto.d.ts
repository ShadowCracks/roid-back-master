import { BaseDto } from 'src/@base/dto/base.dto';
import { GranterType, TokenType } from '../token-types';
export declare class TokenDto extends BaseDto {
    receiverId: string;
    granterId: string;
    type: TokenType;
    granterType: GranterType;
    amount: string;
}
declare const UpdateTokenDto_base: import("@nestjs/common").Type<Partial<Omit<TokenDto, "createdAt" | "updatedAt" | "_id">>>;
export declare class UpdateTokenDto extends UpdateTokenDto_base {
}
declare const TokenQueryDto_base: import("@nestjs/common").Type<Partial<Omit<TokenDto, "createdAt" | "updatedAt">>>;
export declare class TokenQueryDto extends TokenQueryDto_base {
    skip: number;
    limit: number;
}
export {};
