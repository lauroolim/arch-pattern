import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { Injectable } from '@nestjs/common';

export interface IUserRepository {
    create(users: User): Promise<void>;
}

export class UserTypeOrmRepository implements IUserRepository {
    constructor(
        @InjectRepository(User)
        private readonly typeOrmRepo: Repository<User>,
    ) { }

    async create(users: User): Promise<void> {
        await this.typeOrmRepo.save(users);
    }
}