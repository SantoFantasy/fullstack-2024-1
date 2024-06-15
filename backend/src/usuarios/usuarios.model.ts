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
export class Usuario extends Model {
  @Column
  @AutoIncrement
  @PrimaryKey
  cod_usuario: number;

  @Column
  @NotNull
  nome: string;

  @Column
  @NotNull
  rg: string;

  @Column
  @NotNull
  data_nascimento: Date;

  @Column
  @NotNull
  sexo: string;

  @Column
  @NotNull
  endereco: string;

  @Column
  @NotNull
  bairro: string;

  @Column
  @NotNull
  cidade: string;

  @Column
  @NotNull
  cep: string;

  @Column
  @NotNull
  telefone: string;

  @Column
  @NotNull
  email: string;

  @Column
  @NotNull
  curso: string;

  @Column
  @NotNull
  semestre: number;

  @Column
  @HasMany(() => Livro)
  cod_livro: number;
}
