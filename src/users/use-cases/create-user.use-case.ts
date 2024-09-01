import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class CreateUserUseCase {
    constructor(@InjectRepository(User)
    private projectRepo: Repository<User>,
    ) { }
    execute(input: CreateUserDto) {

        const user = new User(input);
        if (input.role) {
            user.role = input.role;
        }
        return this.projectRepo.save(user);
    }
}