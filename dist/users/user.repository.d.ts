import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
export interface IUserRepository {
    create(users: User): Promise<void>;
}
export declare class UserTypeOrmRepository implements IUserRepository {
    private readonly typeOrmRepo;
    constructor(typeOrmRepo: Repository<User>);
    create(users: User): Promise<void>;
}
