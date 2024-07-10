import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table
export class Editora extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column({ allowNull: false, type: DataType.STRING(100) })
  nome: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  endereco: string;

  @Column({ allowNull: true, type: DataType.STRING(50) })
  cidade: string;

  @Column({ allowNull: true, type: DataType.STRING(10) })
  cep: string;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  telefone: string;

  @Column({ allowNull: false, type: DataType.STRING(100) })
  email: string;
}
