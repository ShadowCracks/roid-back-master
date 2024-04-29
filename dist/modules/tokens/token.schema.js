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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSchema = exports.Token = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const base_entity_1 = require("../../@base/entity/base.entity");
const user_schema_1 = require("../users/user.schema");
const token_types_1 = require("./token-types");
const ObjectId = mongoose.Schema.Types.ObjectId;
let Token = class Token extends base_entity_1.Base {
};
exports.Token = Token;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: [token_types_1.TokenType.KARMA_POINT],
        default: token_types_1.TokenType.KARMA_POINT,
    }),
    __metadata("design:type", String)
], Token.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Token.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: [token_types_1.GranterType.SYSTEM, token_types_1.GranterType.REGULAR_USER],
    }),
    __metadata("design:type", String)
], Token.prototype, "granterType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_schema_1.User.name, required: true }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Token.prototype, "receiverId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_schema_1.User.name, required: false }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Token.prototype, "granterId", void 0);
exports.Token = Token = __decorate([
    (0, mongoose_1.Schema)({ autoCreate: true })
], Token);
exports.TokenSchema = mongoose_1.SchemaFactory.createForClass(Token);
exports.TokenSchema.pre('save', function (next) {
    next();
});
//# sourceMappingURL=token.schema.js.map