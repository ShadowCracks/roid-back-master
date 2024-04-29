"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTER_TOKEN_AMOUNT = exports.GranterType = exports.TokenType = void 0;
const REGISTER_TOKEN_AMOUNT = 5;
exports.REGISTER_TOKEN_AMOUNT = REGISTER_TOKEN_AMOUNT;
var TokenType;
(function (TokenType) {
    TokenType["KARMA_POINT"] = "Karma_Point";
})(TokenType || (exports.TokenType = TokenType = {}));
var GranterType;
(function (GranterType) {
    GranterType["SYSTEM"] = "System";
    GranterType["REGULAR_USER"] = "Regular User";
})(GranterType || (exports.GranterType = GranterType = {}));
//# sourceMappingURL=token-types.js.map