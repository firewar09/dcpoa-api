// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Gadinhos } from '../gadinhos/gadinho.entity';
import { DataSource } from 'typeorm';
import { Migrations1722266977830 } from 'src/migrations/1722266977830-migrations';

export const typeOrmConfig: DataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  schema: 'public',
  username: 'postgres',
  password: 'teste1234',
  database: 'postgres',
  entities: [Gadinhos],
  migrations: [Migrations1722266977830]
});