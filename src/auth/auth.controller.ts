import { Controller, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        @Inject('myAge') private age: number
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        console.log(this.age);
        return this.authService.login(req.user);
    }
}
