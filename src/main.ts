import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AddUserInterceptor } from './auth/add-user.interceptor';
import { UsersService } from './users/users.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const userService: UsersService = app.get(UsersService, { strict: false });
  app.useGlobalInterceptors(new AddUserInterceptor(userService));

  const config = new DocumentBuilder()
    .setTitle('Publisher Manager')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
