import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Livro extends Model {
  @Column
  isbn: string;

  @Column
  titulo: string;

  @Column
  autor: string;

  @Column
  ano: number;

  @Column
  genero: string;

  @Column
  resumo: string;

  @Column
  palavraschave: string;

  @Column
  status: number;

  @Column
  localizacao: string;
}
