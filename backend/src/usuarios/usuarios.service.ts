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

  findOne(ID: number): Promise<Usuario> {
    return this.usuarioModel.findOne({
      where: {
        ID,
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

  async remove(ID: number): Promise<void> {
    const usuario = await this.findOne(ID);
    await usuario.destroy();
  }

  async create(usuarioData: any): Promise<Usuario> {
    const usuario = new this.usuarioModel(usuarioData);
    return usuario.save();
  }

  async update(ID: number, usuarioUpdates: any): Promise<Usuario> {
    const usuario = await this.findOne(ID);
    if (!usuario) {
      // TODO: throw a custom exception
    } else {
      return usuario.update(usuarioUpdates);
    }
  }
}
