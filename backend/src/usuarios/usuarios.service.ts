import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './usuarios.model';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.findAll();
  }

  findOne(cod_usuario: number): Promise<Usuario> {
    return this.usuarioModel.findOne({
      where: {
        cod_usuario,
      },
    });
  }

  findAllByName(nome: string): Promise<Usuario[]> {
    return this.usuarioModel.findAll({
      where: {
        nome,
      },
    });
  }

  async remove(cod_usuario: number): Promise<void> {
    const usuario = await this.findOne(cod_usuario);
    await usuario.destroy();
  }

  async create(usuarioData: Partial<Usuario>): Promise<Usuario> {
    const usuario = new this.usuarioModel(usuarioData);
    return usuario.save();
  }

  async update(usuarioUpdates: Usuario): Promise<Usuario> {
    const usuario = await this.findOne(usuarioUpdates.cod_usuario);
    if (!usuario) {
      // TODO: throw a custom exception
    } else {
      return usuario.update(usuarioUpdates);
    }
  }
}
