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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("./user.schema");
const class_transformer_1 = require("class-transformer");
const user_dto_1 = require("./dto/user.dto");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mongodb_parser_1 = require("../../@common/utilities/mongodb-parser");
const event_emitter_1 = require("@nestjs/event-emitter");
const user_types_1 = require("./types/user.types");
const token_types_1 = require("../tokens/token-types");
let UsersService = class UsersService {
    constructor(userModel, eventEmitter) {
        this.userModel = userModel;
        this.eventEmitter = eventEmitter;
    }
    async findOne(queryDto) {
        try {
            const user = await this.userModel.findOne(queryDto);
            if (!user) {
                throw new Error(`${this.userModel.modelName} not found`);
            }
            return (0, class_transformer_1.plainToClass)(user_dto_1.UserDto, user.toObject());
        }
        catch (ex) {
            throw new common_1.HttpException((0, mongodb_parser_1.getErrorMessage)(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async create(createUserDto) {
        try {
            const userRepository = new this.userModel(createUserDto);
            const result = await userRepository.save();
            const userDto = (0, class_transformer_1.plainToClass)(user_dto_1.UserDto, result.toObject());
            const createTokenDto = {
                receiverId: userDto._id,
                amount: token_types_1.REGISTER_TOKEN_AMOUNT,
                granterType: token_types_1.GranterType.SYSTEM,
                type: token_types_1.TokenType.KARMA_POINT,
            };
            this.eventEmitter.emit(user_types_1.Events.REGISTER_SUCCESS, createTokenDto);
            return userDto;
        }
        catch (ex) {
            throw new common_1.HttpException((0, mongodb_parser_1.getErrorMessage)(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        event_emitter_1.EventEmitter2])
], UsersService);
//# sourceMappingURL=users.service.js.map