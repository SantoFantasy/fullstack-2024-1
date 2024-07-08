import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  NotNull,
} from 'sequelize-typescript';

@Table
export class Funcionario extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_funcionario!: number;

  @NotNull
  @Column({allowNull: false, type: DataType.STRING(100)})
  nome!: string;

  @NotNull
  @Column({allowNull: false, type: DataType.TEXT})
  endereco!: string;

  @NotNull
  @Column({allowNull: false, type: DataType.STRING(50)})
  bairro!: string;

  @NotNull
  @Column({allowNull: false, type: DataType.STRING(50)})
  cidade!: string;

  @NotNull
  @Column({allowNull: false, type: DataType.STRING(10)})
  cep!: string;

  @NotNull
  @Column({allowNull: false, type: DataType.STRING(15)})
  telefone!: string;

  @NotNull
  @Column({allowNull: false, type: DataType.DATE})
  data_nascimento!: Date;

  @NotNull
  @Column({allowNull: false, type: DataType.STRING(50)})
  cargo!: string;

  @NotNull
  @Column({allowNull: false, type: DataType.DATE})
  data_contratacao!: Date;

  @NotNull
  @Column({allowNull: false, type: DataType.DECIMAL(10, 2)})
  salario!: number;

  @NotNull
  @Column({allowNull: false, type: DataType.CHAR(1)})
  sexo!: string;
}
