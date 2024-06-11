import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Usuario extends Model {
  @Column
  ID: number;

  @Column
  nome: string;

  @Column
  endereco: string;

  @Column
  telefone: string;

  @Column
  email: string;

  @Column
  nascimento: Date;

  @Column
  tipo_usuario: Date;

  @Column
  multa_pendente: boolean;

  @Column
  qtd_livros_emprestados: number;
}
