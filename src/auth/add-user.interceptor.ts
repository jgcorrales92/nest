
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AddUserInterceptor implements NestInterceptor {
    constructor(
        private userService: UsersService
    ) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const user = request?.user;
        
        if(!user){
            return next.handle();  
        }
            return from(this.userService.findOne(user.userId)).pipe(
                mergeMap(user => {
                    request['user'] = user;
                    return next.handle();
                })
            ); 
        ;
    }
}
