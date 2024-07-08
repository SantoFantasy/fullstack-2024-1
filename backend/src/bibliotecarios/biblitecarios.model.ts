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
  @Column({allowNull: false, type: DataType.STRING[50]})
  usuario!: string;

  @NotNull
  @Column({allowNull: false, type: DataType.STRING[50]})
  senha!: string;
}
