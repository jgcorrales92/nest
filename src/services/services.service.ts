import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>
  ) { }

  create(createServiceDto: CreateServiceDto) {
    const user = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(user);
  }
  findAll() {
    return this.serviceRepository.find();
  }

  findOne(id: number) {
    return this.serviceRepository.findOneBy({ id });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    await this.serviceRepository.update(id, updateServiceDto);
    return this.serviceRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const response = await this.serviceRepository.delete(id);
  }
}
