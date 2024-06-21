import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private funcionariosService: FuncionariosService) {}

  @Get()
  async findAll() {
    return this.funcionariosService.findAll();
  }

  @Get('/:cod_funcionario')
  async findOne(cod_funcionario: number) {
    return this.funcionariosService.findOne(cod_funcionario);
  }

  @Delete('/remove/:cod_funcionario')
  async remove(cod_funcionario: number) {
    return this.funcionariosService.remove(cod_funcionario);
  }

  @Post('/create')
  async create(funcionarioData: any) {
    return this.funcionariosService.create(funcionarioData);
  }

  @Put('/update')
  async update(funcionarioData: any) {
    return this.funcionariosService.update(funcionarioData);
  }
}
