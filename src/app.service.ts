import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './User.entity';

const sleep = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getHello(): Promise<string> {
    const query = this.userRepository.find({ relations: ['test'] });
    await sleep(3000);
    const result = await query;
    console.log(result);
    return 'Hello World!';
  }
}
