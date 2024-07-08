import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  HasMany,
} from 'sequelize-typescript';
import { Livro } from 'src/livros/livros.model';

@Table
export class Categoria extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  cod_categoria: number;

  @Column
  categoria: string;

  @HasMany(() => Livro)
  livro: Livro[];
}
