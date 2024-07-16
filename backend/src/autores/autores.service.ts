import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutoreDto } from './dto/update-autor.dto';
import { Autor } from './entities/autor.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Op, WhereOptions } from 'sequelize';

@Injectable()
export class AutoresService {
  constructor(
    @InjectModel(Autor)
    private autoresModel: typeof Autor,
  ) {}

  async create(createAutorDto: CreateAutorDto) {
    return this.autoresModel.create({
      nome: createAutorDto.nome,
      data_nascimento: createAutorDto.data_nascimento,
      nacionalidade: createAutorDto.nacionalidade,
      biografia: createAutorDto.biografia,
    });
  }

  async findAll(autor: Partial<Autor>, page: number, limit: number) {
    const attributes: WhereOptions<any>    = {};
    if (autor.nome) attributes.nome = { [Op.like]: attributes.nome }
    if (autor.nacionalidade) attributes.nacionalidade = autor.nacionalidade

    return this.autoresModel.findAll({
      where: attributes,
      limit: limit,
      offset: (page + 1) * limit
    });
  }

  async findOne(id: number) {
    return this.autoresModel.findByPk(id);
  }

  async update(id: number, updateAutoreDto: UpdateAutoreDto) {
    const autor = await this.autoresModel.findByPk(id);
    if (!autor) {
      // TODO: throw a custom exception
    } else {
      return autor.update({
        nome: updateAutoreDto.nome,
        data_nascimento: updateAutoreDto.data_nascimento,
        nacionalidade: updateAutoreDto.nacionalidade,
        biografia: updateAutoreDto.biografia,
      });
    }
  }

  async remove(id: number) {
    const autor = await this.autoresModel.findByPk(id);
    if (!autor) {
      // TODO: throw a custom exception
    } else {
      return autor.destroy();
    }
  }
}
