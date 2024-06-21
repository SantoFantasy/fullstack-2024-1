import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  DataType,
} from 'sequelize-typescript';

@Table
export class Bibliotecarios extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_bibliotecario!: number;

  @NotNull
  @Column(DataType.STRING(50))
  usuario!: string;

  @NotNull
  @Column(DataType.STRING(50))
  senha!: string;
}
