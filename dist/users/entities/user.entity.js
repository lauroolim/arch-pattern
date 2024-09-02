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
exports.User = exports.UserRole = void 0;
const typeorm_1 = require("typeorm");
const crypto = require("crypto");
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["User"] = "user";
})(UserRole || (exports.UserRole = UserRole = {}));
let User = class User {
    constructor(props, id) {
        Object.assign(this, props);
        this.id = id ?? crypto.randomUUID();
        this.role = this.role ?? UserRole.User;
    }
    async setPassword(password) {
        const salt = crypto.randomBytes(10).toString('hex');
        const hash = crypto.createHash('sha256').update(password + salt).digest('hex');
        this.password = hash;
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-enum' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object, String])
], User);
//# sourceMappingURL=user.entity.js.map