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
  @Column
  @AutoIncrement
  @PrimaryKey
  cod_categoria: number;

  @Column
  @NotNull
  categoria: string;

  @Column
  @NotNull
  @HasMany(() => Livro)
  livro: Livro[];
}
