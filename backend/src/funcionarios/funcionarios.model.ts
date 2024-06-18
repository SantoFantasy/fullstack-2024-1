import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  NotNull,
} from 'sequelize-typescript';

@Table({ tableName: 'funcionarios' })
export class Funcionario extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_funcionario!: number;

  @NotNull
  @Column(DataType.STRING(100))
  nome!: string;

  @NotNull
  @Column(DataType.TEXT)
  endereco!: string;

  @NotNull
  @Column(DataType.STRING(50))
  bairro!: string;

  @NotNull
  @Column(DataType.STRING(50))
  cidade!: string;

  @NotNull
  @Column(DataType.STRING(10))
  cep!: string;

  @NotNull
  @Column(DataType.STRING(15))
  telefone!: string;

  @NotNull
  @Column(DataType.DATE)
  data_nascimento!: Date;

  @NotNull
  @Column(DataType.STRING(50))
  cargo!: string;

  @NotNull
  @Column(DataType.DATE)
  data_contratacao!: Date;

  @NotNull
  @Column(DataType.DECIMAL(10, 2))
  salario!: number;

  @NotNull
  @Column(DataType.CHAR(1))
  sexo!: string;
}
