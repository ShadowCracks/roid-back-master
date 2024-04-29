import { Module } from '@nestjs/common';
import { Token, TokenSchema } from './token.schema';
import { TokensService } from './tokens.service';
import { TokensController } from './tokens.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
  ],
  controllers: [TokensController],
  providers: [TokensService],
})
export class TokensModule {}
