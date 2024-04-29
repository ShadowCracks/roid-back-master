import { GranterType, TokenType } from '../token-types';
export declare class CreateTokenDto {
    receiverId: string;
    granterType: GranterType;
    type: TokenType;
    granterId?: string;
    amount: number;
}
export declare class GrantTokenDto {
    receiverId: string;
    amount: number;
    granterType: GranterType;
    granterId: string;
    type: TokenType;
}
