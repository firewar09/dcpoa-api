import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gadinho } from './gadinho.entity';
import { getConnection, getManager } from 'typeorm';

@Injectable()
export class GadinhoService {
  constructor(
    @InjectRepository(Gadinho)
    private gadinhoRepository: Repository<Gadinho>,
  ) {}

  async findGadinhoById(id: number): Promise<Gadinho[]> {
  try {
    const columnProperty = getConnection().getMetadata(Gadinho).ownColumns.map(column => column.propertyName)
    const columnDatabase = getConnection().getMetadata(Gadinho).ownColumns.map(column => column.databaseName)
    console.log(columnProperty, columnDatabase) 
    return await this.gadinhoRepository.find();
  } catch (error) {
    console.log(error) 
  }
}
}