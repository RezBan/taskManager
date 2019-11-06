import { UserService } from '../user/user.service';
import { Injectable } from '@nestjs/common';
import { AuthPayload } from './dto/auth.dto';

const uuidv4 = require('uuid/v4');

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}

  async createToken(): Promise<object> {
    const accessToken = await uuidv4();
    return accessToken
  }

  async isUserValid(payload: AuthPayload): Promise<boolean | number> {
    const user = await this.userService.findOneByEmail(payload.email);
    if (user) {
      const isUserValid = await this.userService.validatePassword(
        payload.password,
        user.password,
      );
      if (isUserValid) {
        return user.id;
      }
    } else return false;
  }
}