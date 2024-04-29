import { TokensService } from './tokens.service';
import { TokenDto, TokenQueryDto } from './dto/token.dto';
import { UserDto } from '../users/dto/user.dto';
import { GrantTokenDto } from './dto/create-token.dto';
export declare class TokensController {
    private readonly tokenService;
    constructor(tokenService: TokensService);
    create(grantTokenDto: GrantTokenDto, user: UserDto): Promise<any>;
    find(tokenQueryDto: TokenQueryDto, user: UserDto): Promise<TokenDto[]>;
    findById(tokenId: string): Promise<TokenDto>;
}
