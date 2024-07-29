import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gadinhos } from './gadinho.entity';
import { GadinhoController } from './gadinho.controller';
import { GadinhoService } from './gadinho.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gadinhos])],
  controllers: [GadinhoController],
  providers: [GadinhoService],
})
export class GadinhosModule {}