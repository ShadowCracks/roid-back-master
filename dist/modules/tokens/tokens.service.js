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
exports.TokensService = void 0;
const common_1 = require("@nestjs/common");
const token_schema_1 = require("./token.schema");
const token_dto_1 = require("./dto/token.dto");
const create_token_dto_1 = require("./dto/create-token.dto");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crud_generic_1 = require("../../@base/generics/crud-generic");
const event_emitter_1 = require("@nestjs/event-emitter");
const user_types_1 = require("../users/types/user.types");
const token_aggregations_1 = require("./aggregations/token.aggregations");
const token_types_1 = require("./token-types");
let TokensService = class TokensService extends crud_generic_1.CrudService {
    constructor(tokenModel) {
        super(tokenModel, token_dto_1.TokenDto);
        this.tokenModel = tokenModel;
    }
    async grantRegistrationToken(createTokenDto) {
        await this.create(createTokenDto);
    }
    async grantTokens(grantTokenDto) {
        grantTokenDto.type = token_types_1.TokenType.KARMA_POINT;
        grantTokenDto.granterType = token_types_1.GranterType.REGULAR_USER;
        const session = await this.tokenModel.startSession();
        session.startTransaction();
        try {
            const granterAggregation = (0, token_aggregations_1.getTokenCreditsAggregation)(grantTokenDto.granterId);
            const [result] = await this.tokenModel.aggregate(granterAggregation);
            const { totalTokens } = result;
            if (grantTokenDto.amount > totalTokens) {
                throw new Error('Insufficient tokens');
            }
            else {
                const token = new this.tokenModel(grantTokenDto);
                await token.save({ session });
                await session.commitTransaction();
                return {
                    status: 'success',
                    message: 'Token Sent',
                };
            }
        }
        catch (ex) {
            await session.abortTransaction();
            throw new common_1.HttpException(ex.message, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        finally {
            session.endSession();
        }
    }
};
exports.TokensService = TokensService;
__decorate([
    (0, event_emitter_1.OnEvent)(user_types_1.Events.REGISTER_SUCCESS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_token_dto_1.CreateTokenDto]),
    __metadata("design:returntype", Promise)
], TokensService.prototype, "grantRegistrationToken", null);
exports.TokensService = TokensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(token_schema_1.Token.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TokensService);
//# sourceMappingURL=tokens.service.js.map