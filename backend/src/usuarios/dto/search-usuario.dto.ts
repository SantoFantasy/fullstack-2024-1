import { Pageable } from 'src/dto/pageable.dto';
import { Usuario } from '../entities/usuario.entity';

export class SearchUsuario extends Pageable {
  nome: string;
  admin_status: boolean;
  func_status: boolean;
  cidade: string;
  sexo: string;

  usuario(): Partial<Usuario> {
    return {
      nome: this.nome,
      admin_status: this.admin_status,
      func_status: this.func_status,
      cidade: this.cidade,
      sexo: this.sexo,
    };
  }
}
