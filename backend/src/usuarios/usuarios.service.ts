import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';

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
    });
  }

  async findAll() {
    return this.usuariosModel.findAll();
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
    return `This action removes a #${id} usuario`;
  }
}
