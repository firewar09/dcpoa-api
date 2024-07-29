import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gadinho } from './gadinho.entity';

@Injectable()
export class GadinhoService {
  constructor(
    @InjectRepository(Gadinho)
    private gadinhoRepository: Repository<Gadinho>,
  ) {}

  async findOneById(id: number): Promise<Gadinho> {
    return this.gadinhoRepository.findOne(id);
  }
}