import { Pageable } from 'src/dto/pageable.dto';
import { Livro } from '../entities/livro.entity';

export class SearchLivro extends Pageable {
  titulo: string;
  qtd_copias: number;
  qtd_paginas: number;
  cdd: string;
  ano_publicacao: number;

  livro(): Partial<Livro> {
    return {
      titulo: this.titulo,
      qtd_copias: this.qtd_copias,
      qtd_paginas: this.qtd_paginas,
      cdd: this.cdd,
      ano_publicacao: this.ano_publicacao,
    };
  }
}
