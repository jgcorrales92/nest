import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createPostDto: CreatePostDto, user: User) {
    
    const post = this.postRepository.create({...createPostDto,author: user});
    const resp = await this.postRepository.save(post);
    
    user.posts = [...(user.posts || []), post];
   
    await this.userRepository.save(user);
    return this.postRepository.findOneBy({ id: resp.id });
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  async update(id: number, UpdatePostDto: UpdatePostDto) {
    await this.postRepository.update(id, UpdatePostDto);
    return this.postRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const response = await this.postRepository.delete(id);
  }
}
