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
import { Usuario } from 'src/usuarios/usuarios.model';

@Table
export class Livro extends Model {
  @Column({ allowNull: false })
  cod_catalogacao: number;

  @AutoIncrement
  @PrimaryKey
  @Unique
  @NotNull
  @Column({ allowNull: false })
  cod_livro: number;

  @NotNull
  @Column({ allowNull: false })
  titulo: string;

  @NotNull
  @Column({ allowNull: false })
  nome_autores: string;

  @NotNull
  @Column({ allowNull: false })
  ano_publicacao: number;

  @NotNull
  @Column({ allowNull: false })
  cod_isbn: string;

  @NotNull
  @Column({ allowNull: false })
  area: string;

  @NotNull
  @Column({ allowNull: false })
  idioma: string;

  @NotNull
  @Column({ allowNull: false })
  subarea: string;

  @NotNull
  @Column({ allowNull: false })
  data_tombo: Date;

  @ForeignKey(() => Categoria)
  @Column
  cod_categoria: number;

  @BelongsTo(() => Categoria)
  categoria: Categoria;

  @NotNull
  @Column({ allowNull: false })
  quantidade_paginas: number;

  @NotNull
  @Column({ allowNull: false })
  classificacao: string;

  @NotNull
  @Column({ allowNull: false })
  cod_catalgogacao: number;

  @BelongsTo(() => Usuario)
  usuario: Usuario;

  @ForeignKey(() => Usuario)
  @Column
  usuarioId: number;
}
