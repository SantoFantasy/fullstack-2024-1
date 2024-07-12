import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './entities/livro.entity';
import { Op } from 'sequelize';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livrosModel: typeof Livro,
  ) {}

  async create(createLivroDto: CreateLivroDto) {
    return this.livrosModel.create({
      cod_isbn: createLivroDto.cod_isbn,
      titulo: createLivroDto.titulo,
      autores: createLivroDto.autores,
      editora: createLivroDto.editora,
      tipo_capa: createLivroDto.tipo_capa,
      ano_publicacao: createLivroDto.ano_publicacao,
      genero: createLivroDto.genero,
      cdd: createLivroDto.cdd,
      qtd_paginas: createLivroDto.qtd_paginas,
    });
  }

  async findAll() {
    return this.livrosModel.findAll();
  }

  async findOneById(id: number) {
    return this.livrosModel.findByPk(id);
  }

  async findOneByIsbn(isbn: number) {
    return this.livrosModel.findOne({ where: { cod_isbn: isbn } });
  }

  async update(id: number, updateLivroDto: UpdateLivroDto) {
    const condition = {
      where: {
        [Op.or]: {
          id: id,
          cod_isbn: id,
        },
      },
    };
    const livro = await this.livrosModel.findOne(condition);
    if (!livro) {
      // TODO: throw a custom exception
    } else {
      return livro.update({
        cod_isbn: updateLivroDto.cod_isbn,
        titulo: updateLivroDto.titulo,
        autores: updateLivroDto.autores,
        editora: updateLivroDto.editora,
        tipo_capa: updateLivroDto.tipo_capa,
        ano_publicacao: updateLivroDto.ano_publicacao,
        genero: updateLivroDto.genero,
        cdd: updateLivroDto.cdd,
        qtd_paginas: updateLivroDto.qtd_paginas,
      });
    }
  }

  async remove(id: number) {
    const livro = await this.livrosModel.findByPk(id);
    if (!livro) {
      // TODO: throw a custom exception
    } else {
      return livro.destroy();
    }
  }
}
