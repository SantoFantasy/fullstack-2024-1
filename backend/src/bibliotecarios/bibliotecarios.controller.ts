import { Controller, Delete, Post, Get, Put, Body } from '@nestjs/common';
import { BibliotecariosService } from './bibliotecarios.service';
import { Bibliotecarios } from './biblitecarios.model';

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
  async create(@Body() bibliotecarioData: Bibliotecarios) {
    return this.bibliotecariosService.create(bibliotecarioData);
  }

  @Put('/update/:cod_bibliotecario')
  async update(@Body() bibliotecarioUpdates: Bibliotecarios) {
    return this.bibliotecariosService.update(bibliotecarioUpdates);
  }
}
