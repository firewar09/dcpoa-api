import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gadinho } from './gadinho.entity';
import { GadinhoController } from './gadinho.controller';
import { GadinhoService } from './gadinho.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gadinho])],
  controllers: [GadinhoController],
  providers: [GadinhoService],
})
export class GadinhosModule {}