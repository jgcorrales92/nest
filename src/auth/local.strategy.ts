
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({usernameField: 'passport', passwordField: 'passwd'});
  }

  async validate(passport: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(passport, password);
    
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
