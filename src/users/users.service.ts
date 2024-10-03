import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as hashService from 'src/auth/hash'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const hash = await hashService.hashPasswd(createUserDto.passwd);

    const user = this.userRepository.create({ ...createUserDto, passwd: hash });
    //const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findByPassport(passport: string) {
    return this.userRepository.findOneBy({ passport });
  }

  /*async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOneBy({ id });
  }*/
 
    async update(id: number, updateUserDto: UpdateUserDto) {
      if (updateUserDto.passwd) {
        const hash = await hashService.hashPasswd(updateUserDto.passwd)
        updateUserDto.passwd = hash;
      }
      await this.userRepository.update(id, updateUserDto);
      return this.userRepository.findOneBy({ id });
    }

  async remove(id: number) {
    const response = await this.userRepository.delete(id);
  }

  private ignorePasswd(user: User) {
    const { passwd, ...other } = user;
    return other;
  }
}
