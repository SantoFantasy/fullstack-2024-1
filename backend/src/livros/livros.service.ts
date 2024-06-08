import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Livro } from "./livros.model";
import { userInfo } from "os";

@Injectable()
export class LivrosService{
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro
  ){}

  async findAll(): Promise<Livro[]>{
    return this.livroModel.findAll();
  }

  findOne(isbn: string): Promise<Livro>{
    return this.livroModel.findOne({
      where: {
        isbn
      }
    });
  }

  async remove(isbn: string): Promise<void>{
    const livro = await this.findOne(isbn);
    await livro.destroy();
  }
}