import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import WoundType from './User.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(WoundType)
    private woundTypeRepository: Repository<WoundType>,
  ) {}

  getHello(): string {
    this.woundTypeRepository.find({ relations: ['test'] });
    return 'Hello World!';
  }
}
