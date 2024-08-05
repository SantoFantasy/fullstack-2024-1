import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Unique,
  BelongsToMany,
  BelongsTo,
  NotNull,
} from 'sequelize-typescript';
import { Autor } from 'src/autores/entities/autor.entity';
import { Livros_Autores } from 'src/autores/entities/livros-autores.entity';
import { Editora } from 'src/editoras/entities/editora.entity';

@Table
export class Livro extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @Column({ allowNull: false, type: DataType.STRING[13] })
  cod_isbn: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(255) })
  titulo: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  editora: number;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(1) })
  tipo_capa: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.INTEGER })
  ano_publicacao: number;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(100) })
  genero: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(10) })
  cdd: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.INTEGER })
  qtd_paginas: number;

  @NotNull
  @Column({ allowNull: false, type: DataType.INTEGER })
  edicao: number;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(4) })
  idioma: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.INTEGER })
  qtd_copias: number;
}
