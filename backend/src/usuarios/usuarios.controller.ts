import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Usuario } from './usuarios.model';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get()
  async findAll() {
    return this.usuariosService.findAll();
  }

  @Get('/:cod_usuario')
  async findOne(cod_usuario: number) {
    return this.usuariosService.findOne(cod_usuario);
  }

  @Delete('/remove/:cod_usuario')
  async remove(cod_usuario: number) {
    return this.usuariosService.remove(cod_usuario);
  }

  @Put('/update/:cod_usuario')
  async update(@Body() usuarioUpdates: Usuario) {
    return this.usuariosService.update(usuarioUpdates);
  }

  @Post('/create')
  async create(@Body() usuariosData: Usuario) {
    return this.usuariosService.create(usuariosData);
  }
}
