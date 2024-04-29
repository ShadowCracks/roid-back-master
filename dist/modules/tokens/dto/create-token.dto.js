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
exports.GrantTokenDto = exports.CreateTokenDto = void 0;
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
const token_types_1 = require("../token-types");
class CreateTokenDto {
}
exports.CreateTokenDto = CreateTokenDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CreateTokenDto.prototype, "receiverId", void 0);
__decorate([
    (0, field_decorators_1.EnumField)(() => token_types_1.GranterType, { swagger: true }),
    __metadata("design:type", String)
], CreateTokenDto.prototype, "granterType", void 0);
__decorate([
    (0, field_decorators_1.EnumField)(() => token_types_1.TokenType, { swagger: true }),
    __metadata("design:type", String)
], CreateTokenDto.prototype, "type", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], CreateTokenDto.prototype, "granterId", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], CreateTokenDto.prototype, "amount", void 0);
class GrantTokenDto {
}
exports.GrantTokenDto = GrantTokenDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], GrantTokenDto.prototype, "receiverId", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], GrantTokenDto.prototype, "amount", void 0);
//# sourceMappingURL=create-token.dto.js.map