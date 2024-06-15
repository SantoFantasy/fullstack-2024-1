import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Unique,
  NotNull,
  HasMany,
} from 'sequelize-typescript';
import { Categoria } from 'src/categorias/categorias.model';

@Table
export class Livro extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  cod_catalogacao: number;

  @Column
  @AutoIncrement
  @Unique
  @NotNull
  cod_livro: number;

  @Column
  @NotNull
  titulo: string;

  @Column
  @NotNull
  nome_autores: string;

  @Column
  @NotNull
  ano_publicacao: number;

  @Column
  @NotNull
  cod_isbn: string;

  @Column
  @NotNull
  area: string;

  @Column
  @NotNull
  idioma: string;

  @Column
  @NotNull
  subarea: string;

  @Column
  @NotNull
  data_tombo: Date;

  @Column
  @NotNull
  @HasMany(() => Categoria)
  cod_categoria: number;

  @Column
  @NotNull
  quantidade_paginas: number;

  @Column
  @NotNull
  classificacao: string;

  @Column
  @NotNull
  cod_catalgogacao: number;
}
