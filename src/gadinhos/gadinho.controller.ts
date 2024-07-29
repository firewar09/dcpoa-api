import { Controller, Get, Param } from '@nestjs/common';
import { GadinhoService } from './gadinho.service';

@Controller('gadinho')
export class GadinhoController {
  constructor(private readonly gadinhoService: GadinhoService) {}

  @Get(':id')
  async getGadinhoById(@Param('id') id: number) {
    return this.gadinhoService.findGadinhoById(id);
  }
}