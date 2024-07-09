import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  async findOne(@Param('cod_usuario') cod_usuario: number) {
    return this.usuariosService.findOne(cod_usuario);
  }

  @Delete('/remove/:cod_usuario')
  async remove(@Param('cod_usuario') cod_usuario: number) {
    return this.usuariosService.remove(cod_usuario);
  }

  @Put('/update/:cod_usuario')
  async update(
    @Param('cod_usuario') cod_usuario: number,
    @Body() usuarioUpdates: Usuario,
  ) {
    return this.usuariosService.update(cod_usuario, usuarioUpdates);
  }

  @Post('/create')
  async create(@Body() usuariosData: Usuario) {
    return this.usuariosService.create(usuariosData);
  }
}
