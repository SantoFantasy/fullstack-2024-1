import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';
import { Op, WhereOptions } from 'sequelize';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario)
    private usuariosModel: typeof Usuario,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosModel.create({
      nome: createUsuarioDto.nome,
      cpf: createUsuarioDto.cpf,
      data_nascimento: createUsuarioDto.data_nascimento,
      sexo: createUsuarioDto.sexo,
      endereco: createUsuarioDto.endereco,
      bairro: createUsuarioDto.bairro,
      cidade: createUsuarioDto.cidade,
      cep: createUsuarioDto.cep,
      telefone: createUsuarioDto.telefone,
      email: createUsuarioDto.email,
      func_status: createUsuarioDto.func_status,
      admin_status: createUsuarioDto.admin_status,
      usuario: createUsuarioDto.usuario,
      senha: createUsuarioDto.senha,
    });
  }

  async findAll(usuario: Partial<Usuario>, page: number, limit: number) {
    const attributes: WhereOptions<any> = {};
    if (usuario.nome) attributes.nome = { [Op.like]: usuario.nome };
    if (usuario.admin_status) attributes.admin_status = usuario.admin_status;
    if (usuario.func_status) attributes.func_status = usuario.func_status;
    if (usuario.cidade) attributes.cidade = { [Op.like]: usuario.cidade };
    if (usuario.sexo) attributes.sexo = usuario.sexo;

    return this.usuariosModel.findAll({
      where: attributes,
      limit: limit,
      offset: (page) * limit,
    });
  }

  async findOne(id: number) {
    return this.usuariosModel.findByPk(id);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuariosModel.findByPk(id);
    if (!usuario) {
    } else {
      return usuario.update({
        nome: updateUsuarioDto.nome,
        cpf: updateUsuarioDto.cpf,
        data_nascimento: updateUsuarioDto.data_nascimento,
        sexo: updateUsuarioDto.sexo,
        endereco: updateUsuarioDto.endereco,
        bairro: updateUsuarioDto.bairro,
        cidade: updateUsuarioDto.cidade,
        cep: updateUsuarioDto.cep,
        telefone: updateUsuarioDto.telefone,
        email: updateUsuarioDto.email,
        func_status: updateUsuarioDto.func_status,
        admin_status: updateUsuarioDto.admin_status,
        senha: updateUsuarioDto.senha,
      });
    }
  }

  async remove(id: number) {
    // return `This action removes a #${id} usuario`;
    const usuario = await this.usuariosModel.findByPk(id);
    if (!usuario) {
    } else {
      return usuario.destroy();
    }
  }
}
