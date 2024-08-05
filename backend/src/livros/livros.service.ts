import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './entities/livro.entity';
import { Op, WhereOptions } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Livros_Autores } from 'src/autores/entities/livros-autores.entity';
import { Autor } from 'src/autores/entities/autor.entity';
import { Editora } from 'src/editoras/entities/editora.entity';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livrosModel: typeof Livro,

    @InjectModel(Livros_Autores)
    private livroAutoresModel: typeof Livros_Autores,

    private sequelize: Sequelize
  ) {}

  async create(createLivroDto: CreateLivroDto) {
   return await this.sequelize.transaction(async t => {
      const newLivro = await this.livrosModel.create<Livro>({
        cod_isbn: createLivroDto.cod_isbn,
        edicao: createLivroDto.edicao,
        titulo: createLivroDto.titulo,
        editora: createLivroDto.editora,
        idioma: createLivroDto.idioma,
        tipo_capa: createLivroDto.tipo_capa,
        ano_publicacao: createLivroDto.ano_publicacao,
        genero: createLivroDto.genero,
        cdd: createLivroDto.cdd,
        qtd_paginas: createLivroDto.qtd_paginas,
        qtd_copias: createLivroDto.qtd_copias,
      });
      const relations = await Promise.allSettled(createLivroDto.autores.map(autor =>{
          return this.livroAutoresModel.create({
            cod_isbn: newLivro.cod_isbn,
            id_autor: autor
          })
      }))

      if (relations.some(promise => promise.status === 'rejected')) {
        throw new Error("Force rollback");
      }
      return newLivro;
    });
  }

  async findAll(livro: Partial<Livro>, page: number, limit: number) {
    const attributes: WhereOptions<any> = {};
    if (livro.titulo) attributes.titulo = livro.titulo;
    if (livro.qtd_copias) attributes.qtd_copias = livro.qtd_copias;
    if (livro.qtd_paginas) attributes.qtd_paginas = livro.qtd_paginas;
    if (livro.cdd) attributes.cdd = livro.cdd;
    if (livro.ano_publicacao) attributes.ano_publicacao = livro.ano_publicacao;
    return this.livrosModel.findAll({
      where: attributes,
      limit: limit,
      offset: (page) * limit,
    });
  }

  async findOneByIsbn(isbn: string) {
    const livro = await this.livrosModel.findOne({ where: { cod_isbn: isbn } });
    const autores =  await this.livroAutoresModel.findAll({  where: { cod_isbn: isbn }})
    return {
      ...livro.toJSON(),
      autores
    }
  }

  async update(isbn: string, updateLivroDto: UpdateLivroDto) {
    return await this.sequelize.transaction(async t => {
      const livro = await this.livrosModel.findOne({
        where: {
            cod_isbn: isbn,
        },
      });

      if (updateLivroDto.cod_isbn) livro.set('cod_isbn', updateLivroDto.cod_isbn);
      if (updateLivroDto.edicao) livro.set('edicao', updateLivroDto.edicao);
      if (updateLivroDto.titulo) livro.set('titulo', updateLivroDto.titulo);
      if (updateLivroDto.editora) livro.set('editora', updateLivroDto.editora);
      if (updateLivroDto.idioma) livro.set('idioma', updateLivroDto.idioma);
      if (updateLivroDto.tipo_capa) livro.set('tipo_capa', updateLivroDto.tipo_capa);
      if (updateLivroDto.ano_publicacao) livro.set('ano_publicacao', updateLivroDto.ano_publicacao);
      if (updateLivroDto.genero) livro.set('genero', updateLivroDto.genero);
      if (updateLivroDto.cdd) livro.set('cdd', updateLivroDto.cdd);
      if (updateLivroDto.qtd_paginas) livro.set('qtd_paginas', updateLivroDto.qtd_paginas);
      if (updateLivroDto.qtd_copias) livro.set('qtd_copias', updateLivroDto.qtd_copias);


      await this.livroAutoresModel.destroy({
        where: {
          cod_isbn: isbn
        }
      });

      const relations = await Promise.allSettled(updateLivroDto.autores.map(autor => {
        return this.livroAutoresModel.create({
          cod_isbn: livro.cod_isbn,
          id_autor: autor
        })
      }))

      if (relations.some(promise => promise.status === 'rejected')) {
        throw new Error("Force rollback");
      }

      await livro.save();

      return livro;
    });
  }

  async remove(cod_isbn: string) {
  const livro = await this.livrosModel.findOne({ where: { cod_isbn: cod_isbn } });
  const autores =  await this.livroAutoresModel.findAll({  where: { cod_isbn: cod_isbn }})
    if (!livro) {
      // TODO: throw a custom exception
    } else {
      autores.forEach(async autor => {
        await autor.destroy();
      })
      return livro.destroy();
    }
  }
}
