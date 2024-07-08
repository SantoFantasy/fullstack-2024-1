import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Unique,
  NotNull,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Categoria } from 'src/categorias/categorias.model';

@Table
export class Livro extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_catalogacao: number;

  @AutoIncrement
  @Unique
  @NotNull
  @Column
  cod_livro: number;

  @NotNull
  @Column
  titulo: string;

  @NotNull
  @Column
  nome_autores: string;

  @NotNull
  @Column
  ano_publicacao: number;

  @NotNull
  @Column
  cod_isbn: string;

  @NotNull
  @Column
  area: string;

  @NotNull
  @Column
  idioma: string;

  @NotNull
  @Column
  subarea: string;

  @NotNull
  @Column
  data_tombo: Date;

  @ForeignKey(() => Categoria)
  @Column
  cod_categoria: number;

  @BelongsTo(() => Categoria)
  categoria: Categoria;

  @NotNull
  @Column
  quantidade_paginas: number;

  @NotNull
  @Column
  classificacao: string;

  @NotNull
  @Column
  cod_catalgogacao: number;
}


