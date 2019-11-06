import { Controller, Post, Body, UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayload } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post()
    async createToken(@Body() AuthPayload: AuthPayload): Promise<any> {
        const userId = await this.authService.isUserValid(AuthPayload)
        if (userId) {
            const token = await this.authService.createToken()
            return {
                token,
                userId
            }
        } else throw new UnauthorizedException()
    }
}