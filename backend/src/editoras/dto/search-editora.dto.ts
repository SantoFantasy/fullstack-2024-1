import { Pageable } from 'src/dto/pageable.dto';
import { Editora } from '../entities/editora.entity';

export class SearchEditora extends Pageable {
  nome: string;
  cidade: string;

  editora(): Partial<Editora> {
    return {
      nome: this.nome,
      cidade: this.cidade,
    };
  }
}
