"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensController = void 0;
const common_1 = require("@nestjs/common");
const tokens_service_1 = require("./tokens.service");
const swagger_1 = require("@nestjs/swagger");
const token_dto_1 = require("./dto/token.dto");
const passport_1 = require("@nestjs/passport");
const auth_user_decorator_1 = require("../../@common/decorators/auth-user.decorator");
const user_dto_1 = require("../users/dto/user.dto");
const create_token_dto_1 = require("./dto/create-token.dto");
let TokensController = class TokensController {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    create(grantTokenDto, user) {
        grantTokenDto.granterId = user._id;
        return this.tokenService.grantTokens(grantTokenDto);
    }
    find(tokenQueryDto, user) {
        tokenQueryDto.receiverId = user._id;
        return this.tokenService.find(tokenQueryDto);
    }
    findById(tokenId) {
        return this.tokenService.findById(tokenId);
    }
};
exports.TokensController = TokensController;
__decorate([
    (0, common_1.Post)('grant-token'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_user_decorator_1.AppUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_token_dto_1.GrantTokenDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], TokensController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List Tokens' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Token list loaded.',
        type: [token_dto_1.TokenDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, auth_user_decorator_1.AppUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [token_dto_1.TokenQueryDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], TokensController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Token By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Token By Id Loaded.',
        type: token_dto_1.TokenDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(':tokenId'),
    __param(0, (0, common_1.Param)('tokenId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TokensController.prototype, "findById", null);
exports.TokensController = TokensController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiTags)('Tokens'),
    (0, common_1.Controller)('tokens'),
    __metadata("design:paramtypes", [tokens_service_1.TokensService])
], TokensController);
//# sourceMappingURL=tokens.controller.js.map