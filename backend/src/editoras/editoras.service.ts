import { Injectable } from '@nestjs/common';
import { CreateEditoraDto } from './dto/create-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';
import { Editora } from './entities/editora.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Op, WhereOptions } from 'sequelize';

@Injectable()
export class EditorasService {
  constructor(
    @InjectModel(Editora)
    private editoraModel: typeof Editora,
  ) {}

  async create(createEditoraDto: CreateEditoraDto) {
    return this.editoraModel.create({
      nome: createEditoraDto.nome,
      endereco: createEditoraDto.endereco,
      cidade: createEditoraDto.cidade,
      cep: createEditoraDto.cep,
      telefone: createEditoraDto.telefone,
      email: createEditoraDto.email,
    });
  }

  async findAll(editora: Partial<Editora>, page: number, limit: number) {
    const attributes: WhereOptions<any> = {};
    if (editora.nome) attributes.nome = { [Op.like]: editora.nome };
    if (editora.cidade) attributes.cidade = { [Op.like]: editora.cidade };

    return this.editoraModel.findAll({
      where: attributes,
      limit: limit,
      offset: (page + 1) * limit,
    });
  }

  async findOne(id: number) {
    return this.editoraModel.findByPk(id);
  }

  async update(id: number, updateEditoraDto: UpdateEditoraDto) {
    const editora = await this.editoraModel.findByPk(id);
    if (!editora) {
      // TODO: throw a custom exception
      // return
    } else {
      return editora.update({
        nome: updateEditoraDto.nome,
        endereco: updateEditoraDto.endereco,
        cidade: updateEditoraDto.cidade,
        cep: updateEditoraDto.cep,
        telefone: updateEditoraDto.telefone,
        email: updateEditoraDto.email,
      });
    }
  }

  async remove(id: number) {
    const editora = await this.editoraModel.findByPk(id);
    if (!editora) {
      // TODO: throw a custom exception
    } else {
      return editora.destroy();
    }
  }
}
