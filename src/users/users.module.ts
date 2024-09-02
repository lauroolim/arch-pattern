import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersWithUseCaseController } from './user-with-use-case.controller';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { UserTypeOrmRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersWithUseCaseController],
  providers: [
    UsersService,
    CreateUserUseCase,
    {
      provide: 'IUserRepository',
      useClass: UserTypeOrmRepository,
    },
  ],
})
export class UsersModule { }
