import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funcionarios } from './funcionarios.model';

@Injectable()
export class FuncionariosService {
  constructor(
    @InjectModel(Funcionarios)
    private funcionariosModel: typeof Funcionarios,
  ) {}

  async findAll(): Promise<Funcionarios[]> {
    return this.funcionariosModel.findAll();
  }

  async findOne(cod_funcionario: number): Promise<Funcionarios> {
    return this.funcionariosModel.findOne({
      where: {
        cod_funcionario,
      },
    });
  }

  async remove(cod_funcionario: number): Promise<void> {
    const funcionario = await this.findOne(cod_funcionario);
    await funcionario.destroy();
  }

  async create(funcionarioData: any): Promise<Funcionarios> {
    const funcionario = new this.funcionariosModel(funcionarioData);
    return funcionario.save();
  }

  async update(funcionarioData: any): Promise<Funcionarios> {
    const funcionario = await this.findOne(funcionarioData.cod_funcionario);
    if (!funcionario) {
      // TODO: throw a custom exception
    } else {
      return funcionario.update(funcionarioData);
    }
  }
}
