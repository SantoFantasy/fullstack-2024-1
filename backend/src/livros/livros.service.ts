import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './entities/livro.entity';
import { Op, WhereOptions } from 'sequelize';

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

  async findAll(livro: Partial<Livro>, page: number, limit: number) {
    const attributes: WhereOptions<any>    = {};;
    if (livro.titulo) attributes.titulo = livro.titulo;
    if (livro.qtd_copias) attributes.qtd_copias = livro.qtd_copias;
    if (livro.qtd_paginas) attributes.qtd_paginas = livro.qtd_paginas;
    if (livro.cdd) attributes.cdd = livro.cdd;
    if (livro.ano_publicacao) attributes.ano_publicacao = livro.ano_publicacao;
    return this.livrosModel.findAll(
      {
        where: {
          titulo: {[Op.like]: attributes.titulo},
          qtd_copias: {[Op.gt]: attributes.qtd_copias},
          qtd_paginas: {[Op.gt]: attributes.qtd_paginas},
          cdd: attributes.cdd,
          ano_publicacao: attributes.ano_publicacao,
        },
        limit: limit,
        offset: (page + 1) * limit,
      },
    );
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
