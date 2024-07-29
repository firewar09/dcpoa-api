import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gadinhos } from './gadinho.entity';
import { getConnection, getManager } from 'typeorm';

@Injectable()
export class GadinhoService {
  constructor(
    @InjectRepository(Gadinhos)
    private gadinhoRepository: Repository<Gadinhos>,
  ) {}

  async findGadinhoById(id: number): Promise<Gadinhos[]> {
  try {
    return await this.gadinhoRepository.find();
  } catch (error) {
    console.log(error) 
  }
}
}