import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import {
  CreateUserDTO,
  UserWithoutPasswordDTO,
} from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async createUser(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<UserWithoutPasswordDTO> {
    return await this.userService.createUser(createUserDTO);
  }
}
