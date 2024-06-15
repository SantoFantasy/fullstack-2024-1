import { Controller, Get } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriasService: CategoriasService) {}

  @Get()
  async findAll() {
    return this.categoriasService.findAll();
  }

  @Get('/:cod_categoria')
  async findOne(cod_categoria: number) {
    return this.categoriasService.findOne(cod_categoria);
  }

  @Get('/remove/:cod_categoria')
  async remove(cod_categoria: number) {
    return this.categoriasService.remove(cod_categoria);
  }
}
