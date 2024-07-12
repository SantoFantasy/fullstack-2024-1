import { Injectable } from '@nestjs/common';
import { CreateAutoreDto } from './dto/create-autor.dto';
import { UpdateAutoreDto } from './dto/update-autor.dto';
import { Autor } from './entities/autor.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AutoresService {
  constructor(
    @InjectModel(Autor)
    private autoresModel: typeof Autor,
  ) {}

  async create(createAutoreDto: CreateAutoreDto) {
    return this.autoresModel.create({
      nome: createAutoreDto.nome,
      data_nascimento: createAutoreDto.data_nascimento,
      nacionalidade: createAutoreDto.nacionalidade,
      biografia: createAutoreDto.biografia,
    });
  }

  async findAll() {
    return this.autoresModel.findAll();
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
