import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livros.model';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro,
  ) {}

  async findAll(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  findOne(isbn: string): Promise<Livro> {
    return this.livroModel.findOne({
      where: {
        isbn,
      },
    });
  }

  async remove(isbn: string): Promise<void> {
    const livro = await this.findOne(isbn);
    await livro.destroy();
  }

  async create(livroData: Partial<Livro>): Promise<Livro> {
    return this.livroModel.create(livroData);
  }

  async update(cod_isbn: string, livroUpdates: Partial<Livro>): Promise<Livro> {
    const livro = await this.findOne(cod_isbn);
    if (!livro) {
      // TODO: throw a custom exception
    } else {
      return livro.update(livroUpdates);
    }
  }
}
