import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categorias.model';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriasService: CategoriasService) {}

  @Get()
  async findAll() {
    return this.categoriasService.findAll();
  }

  @Get('/:cod_categoria')
  async findOne(@Param('cod_categoria') cod_categoria: number) {
    return this.categoriasService.findOne(cod_categoria);
  }

  @Delete('/remove/:cod_categoria')
  async remove(@Param('cod_categoria') cod_categoria: number) {
    return this.categoriasService.remove(cod_categoria);
  }

  @Post('/create')
  async create(@Body() categoriaData: Categoria) {
    return this.categoriasService.create(categoriaData);
  }

  @Put('/update/:cod_categoria')
  async update(
    @Param('cod_categoria') cod_categoria: number,
    @Body() categoriaUpdates: Categoria,
  ) {
    return this.categoriasService.update(cod_categoria, categoriaUpdates);
  }
}
