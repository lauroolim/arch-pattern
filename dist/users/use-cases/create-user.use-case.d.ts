import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";
import { IUserRepository } from "../user.repository";
export declare class CreateUserUseCase {
    private readonly userRepo;
    constructor(userRepo: IUserRepository);
    execute(input: CreateUserDto): Promise<User>;
}
