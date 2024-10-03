import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as hashService from './hash';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(passport: string, pass: string): Promise<any> {
        const user = await this.userService.findByPassport(passport);
        const isSamePasswd = await hashService.compareHash(pass, user.passwd);
        
        if (user && isSamePasswd) {
            const { passport, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: any) {
        const payload = { passport: user.passport, sub: user.id };    
        return {
            access_token: this.jwtService.sign(payload),
        };
    }    
}
