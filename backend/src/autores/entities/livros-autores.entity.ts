import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Livro } from 'src/livros/entities/livro.entity';
import { Autor } from './autor.entity';

@Table
export class Livros_Autores extends Model {
  @ForeignKey(() => Livro)
  @Column
  cod_isbn: string;

  @ForeignKey(() => Autor)
  @Column
  id_autor: number;
}
