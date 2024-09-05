import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
  private projectRepo: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto);
    if (createUserDto.role) {
      user.role = createUserDto.role;
    }
    return this.projectRepo.save(user);
  }

}
