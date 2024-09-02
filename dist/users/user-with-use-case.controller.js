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
exports.UsersWithUseCaseController = void 0;
const common_1 = require("@nestjs/common");
const create_user_use_case_1 = require("./use-cases/create-user.use-case");
let UsersWithUseCaseController = class UsersWithUseCaseController {
};
exports.UsersWithUseCaseController = UsersWithUseCaseController;
__decorate([
    (0, common_1.Inject)(create_user_use_case_1.CreateUserUseCase),
    __metadata("design:type", create_user_use_case_1.CreateUserUseCase)
], UsersWithUseCaseController.prototype, "createProjectUseCase", void 0);
exports.UsersWithUseCaseController = UsersWithUseCaseController = __decorate([
    (0, common_1.Controller)('users')
], UsersWithUseCaseController);
//# sourceMappingURL=user-with-use-case.controller.js.map