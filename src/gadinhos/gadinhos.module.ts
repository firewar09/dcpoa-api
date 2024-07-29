import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gadinho } from './gadinho.entity';
import { GadinhoService } from './gadinho.service';
import { GadinhoController } from './gadinho.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gadinho])],
  controllers: [GadinhoController],
  providers: [GadinhoService],
})
export class GadinhosModule {}