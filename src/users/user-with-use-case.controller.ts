import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Inject,
} from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';

@Controller('users')
export class UsersWithUseCaseController {
    //não tem regra de negócio

    @Inject(CreateUserUseCase)
    private readonly createProjectUseCase: CreateUserUseCase;

}