import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private projectRepo;
    constructor(projectRepo: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
}
