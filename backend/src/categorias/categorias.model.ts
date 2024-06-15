import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  NotNull,
} from 'sequelize-typescript';

@Table
export class Categoria extends Model {
  @Column
  @AutoIncrement
  @PrimaryKey
  cod_categoria: number;

  @Column
  @NotNull
  categoria: string;
}
