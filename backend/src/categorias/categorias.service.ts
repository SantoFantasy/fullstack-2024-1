import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categoria } from './categorias.model';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel(Categoria)
    private categoriaModel: typeof Categoria,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaModel.findAll();
  }

  findOne(cod_categoria: number): Promise<Categoria> {
    return this.categoriaModel.findOne({
      where: {
        cod_categoria,
      },
    });
  }

  async remove(cod_categoria: number): Promise<void> {
    const categoria = await this.findOne(cod_categoria);
    await categoria.destroy();
  }

  async create(categoriaData: any): Promise<Categoria> {
    const categoria = new this.categoriaModel(categoriaData);
    return categoria.save();
  }

  async update(
    cod_categoria: number,
    categoriaUpdates: any,
  ): Promise<Categoria> {
    const categoria = await this.findOne(cod_categoria);
    if (!categoria) {
      // TODO: throw a custom exception
    } else {
      return categoria.update(categoriaUpdates);
    }
  }
}
