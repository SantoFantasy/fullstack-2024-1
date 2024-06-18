import { Controller, Delete, Post, Get } from '@nestjs/common';
import { BibliotecariosService } from './bibliotecarios.service';

@Controller('bibliotecarios')
export class BibliotecariosController {
  constructor(private bibliotecariosService: BibliotecariosService) {}

  @Get()
  async findAll() {
    return this.bibliotecariosService.findAll();
  }

  @Get('/:cod_bibliotecario')
  async findOne(cod_bibliotecario: number) {
    return this.bibliotecariosService.findOne(cod_bibliotecario);
  }

  @Delete('/remove/:cod_bibliotecario')
  async remove(cod_bibliotecario: number) {
    return this.bibliotecariosService.remove(cod_bibliotecario);
  }

  @Post('/create')
  async create(bibliotecarioData: any) {
    return this.bibliotecariosService.create(bibliotecarioData);
  }
}
