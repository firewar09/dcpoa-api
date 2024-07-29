import { Controller, Get, Param } from '@nestjs/common';
import { GadinhoService } from './gadinho.service';
import { Gadinho } from './gadinho.entity';

@Controller('gadinhos')
export class GadinhoController {
  constructor(private readonly gadinhoService: GadinhoService) {}

  @Get(':id')
  async getGadinhoById(@Param('id') id: number): Promise<Partial<Gadinho>> {
    const gadinho = await this.gadinhoService.findOneById(id);
    if (!gadinho) {
      // Trate o caso em que o gadinho não é encontrado, lançando uma exceção ou retornando um erro
      // Exemplo: throw new NotFoundException(`Gadinho with ID ${id} not found`);
    }
    return { nome: gadinho.nome, idade: gadinho.idade };
  }
}