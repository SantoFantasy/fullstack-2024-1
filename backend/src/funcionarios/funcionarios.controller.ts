import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from './funcionarios.model';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private funcionariosService: FuncionariosService) {}

  @Get()
  async findAll() {
    return this.funcionariosService.findAll();
  }

  @Get('/:cod_funcionario')
  async findOne(@Param('cod_funcionario') cod_funcionario: number) {
    return this.funcionariosService.findOne(cod_funcionario);
  }

  @Delete('/remove/:cod_funcionario')
  async remove(@Param('cod_funcionario') cod_funcionario: number) {
    return this.funcionariosService.remove(cod_funcionario);
  }

  @Post('/create')
  async create(@Body() funcionarioData: Partial<Funcionario>) {
    return this.funcionariosService.create(funcionarioData);
  }

  @Put('/update/:cod_funcionario')
  async update(@Param('cod_funcionario') cod_funcionario:number, @Body() funcionarioData: Funcionario) {
    return this.funcionariosService.update(cod_funcionario, funcionarioData);
  }
}
