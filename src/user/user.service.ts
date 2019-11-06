import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import {
  CreateUserDTO,
  UserWithoutPasswordDTO,
} from './dto/user.dto';
const uuidv4 = require('uuid/v4');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({
        isDeleted: false
    });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      email,
    });
  }

  async findOneById(id: string): Promise<UserWithoutPasswordDTO> {
    const { password, ...restData } = await this.userRepository.findOne(id);
    return restData;
  }

  async validatePassword(payloadPassword: string, userPassword: string): Promise<boolean> {
    const isValid = payloadPassword === userPassword
    return isValid
}

  async getUser(createUserDTO: CreateUserDTO,): Promise<UserWithoutPasswordDTO> {
    const { email, password } = createUserDTO
    const user = await this.findOneByEmail(email);
    if (!user) {
      throw new Error('User does not exitst');
    }
    if (user.password !== password) {
      throw new Error('Wrong password');
    }
    if (user.isDeleted) {
      throw new Error('This user is deleted');
    }
    return user
  }

  async createUser(
    createUserDTO: CreateUserDTO,
  ): Promise<UserWithoutPasswordDTO> {
    const { email, password } = createUserDTO;
    const isExist = await this.findOneByEmail(email);
    if (isExist) {
      throw new Error('User allready exitsts');
    }
    const user = await this.userRepository.save({ email, password });
    return user;
  }

  async deleteUser(id: string): Promise<string> {
    const deletedUser = await this.userRepository.update(id, {
      isDeleted: true,
    });
    if (deletedUser) {
      return 'Deleted';
    }
  }
}
