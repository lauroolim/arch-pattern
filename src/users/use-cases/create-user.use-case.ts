import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { IUserRepository } from "../user.repository";

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepo: IUserRepository,
    ) { }

    async execute(input: CreateUserDto) {
        const user = new User(input);
        await this.userRepo.create(user);
        return user;
    }
}