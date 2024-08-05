import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'Autores' })
export class Autor extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id_autor: number;

  @Column({ allowNull: false, type: DataType.STRING(50) })
  nome: string;

  @Column({ allowNull: true, type: DataType.DATE })
  data_nascimento: string;

  @Column({ allowNull: true, type: DataType.STRING(2) })
  nacionalidade: string;

  @Column({ allowNull: true, type: DataType.TEXT })
  biografia: string;
}
