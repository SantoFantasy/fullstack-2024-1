import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  HasMany,
  ForeignKey
} from 'sequelize-typescript';
import { Livro } from 'src/livros/livros.model';

@Table
export class Usuario extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  cod_usuario: number;

  @NotNull
  @Column({allowNull: false})
  nome: string;

  @NotNull
  @Column({allowNull: false})
  rg: string;

  @NotNull
  @Column({allowNull: false})
  data_nascimento: Date;

  @NotNull
  @Column({allowNull: false})
  sexo: string;

  @NotNull
  @Column({allowNull: false})
  endereco: string;

  @NotNull
  @Column({allowNull: false})
  bairro: string;

  @NotNull
  @Column({allowNull: false})
  cidade: string;

  @NotNull
  @Column({allowNull: false})
  cep: string;

  @NotNull
  @Column({allowNull: false})
  telefone: string;

  @NotNull
  @Column({allowNull: false})
  email: string;

  @NotNull
  @Column({allowNull: false})
  curso: string;

  @NotNull
  @Column({allowNull: false})
  semestre: number;

  @HasMany(() => Livro)
  Livro: Livro[];
}
