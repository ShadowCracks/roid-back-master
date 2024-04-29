import {
  Controller,
  HttpStatus,
  Get,
  Query,
  Param,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { TokensService } from './tokens.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TokenDto, TokenQueryDto } from './dto/token.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from '../users/dto/user.dto';
import { GrantTokenDto } from './dto/create-token.dto';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Tokens')
@Controller('tokens')
export class TokensController {
  constructor(private readonly tokenService: TokensService) {}

  @Post('grant-token')
  create(
    @Body() grantTokenDto: GrantTokenDto,
    @AppUser() user: UserDto,
  ): Promise<any> {
    grantTokenDto.granterId = user._id;
    return this.tokenService.grantTokens(grantTokenDto);
  }

  @ApiOperation({ summary: 'List Tokens' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Token list loaded.',
    type: [TokenDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(
    @Query() tokenQueryDto: TokenQueryDto,
    @AppUser() user: UserDto,
  ): Promise<TokenDto[]> {
    tokenQueryDto.receiverId = user._id;
    return this.tokenService.find(tokenQueryDto);
  }

  @ApiOperation({ summary: 'Get Token By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Token By Id Loaded.',
    type: TokenDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':tokenId')
  findById(@Param('tokenId') tokenId: string): Promise<TokenDto> {
    return this.tokenService.findById(tokenId);
  }
}
