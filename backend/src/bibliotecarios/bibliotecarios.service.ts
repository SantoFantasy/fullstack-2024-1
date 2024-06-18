import { Injectable } from '@nestjs/common';
import { Bibliotecarios } from './biblitecarios.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BibliotecariosService {
  constructor(
    @InjectModel(Bibliotecarios)
    private bibliotecariosModel: typeof Bibliotecarios,
  ) {}

  async findAll(): Promise<Bibliotecarios[]> {
    return this.bibliotecariosModel.findAll();
  }

  async findOne(cod_bibliotecario: number): Promise<Bibliotecarios> {
    return this.bibliotecariosModel.findOne({
      where: {
        cod_bibliotecario,
      },
    });
  }

  async remove(cod_bibliotecario: number): Promise<void> {
    const bibliotecario = await this.findOne(cod_bibliotecario);
    await bibliotecario.destroy();
  }

  async create(bibliotecarioData: any): Promise<Bibliotecarios> {
    const bibliotecario = new this.bibliotecariosModel(bibliotecarioData);
    return bibliotecario.save();
  }

  async update(bibliotecarioData: any): Promise<Bibliotecarios> {
    const bibliotecario = await this.findOne(
      bibliotecarioData.cod_bibliotecario,
    );
    if (!bibliotecario) {
      // TODO: throw a custom exception
    } else {
      return bibliotecario.update(bibliotecarioData);
    }
  }
}
