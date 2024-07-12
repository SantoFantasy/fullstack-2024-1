import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  NotNull,
  ForeignKey,
} from 'sequelize-typescript';
import { Usuario } from './usuario.entity';
import { Livro } from 'src/livros/entities/livro.entity';

@Table
export class Emprestimo extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  cod_emprestimo: number;

  @ForeignKey(() => Usuario)
  @Column
  cod_usuario: number;

  @ForeignKey(() => Livro)
  @Column
  cod_isbn: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.DATE })
  data_emprestimo: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  data_devolucao: Date;
}
