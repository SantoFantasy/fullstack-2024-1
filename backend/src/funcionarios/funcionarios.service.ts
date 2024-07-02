import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funcionario } from './funcionarios.model';

@Injectable()
export class FuncionariosService {
  constructor(
    @InjectModel(Funcionario)
    private funcionariosModel: typeof Funcionario,
  ) {}

  async findAll(): Promise<Funcionario[]> {
    return this.funcionariosModel.findAll();
  }

  async findOne(cod_funcionario: number): Promise<Funcionario> {
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

  async create(funcionarioData: Partial<Funcionario>): Promise<Funcionario> {
    const funcionario = new this.funcionariosModel(funcionarioData);
    return funcionario.save();
  }

  async update(funcionarioData: Funcionario): Promise<Funcionario> {
    const funcionario = await this.findOne(funcionarioData.cod_funcionario);
    if (!funcionario) {
      // TODO: throw a custom exception
    } else {
      return funcionario.update(funcionarioData);
    }
  }
}
