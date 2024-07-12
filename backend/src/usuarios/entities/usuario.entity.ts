import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Unique,
  NotNull,
} from 'sequelize-typescript';

@Table
export class Usuario extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  cod_usuario: number;

  @Column({ allowNull: false, type: DataType.STRING(100) })
  nome: string;

  @Unique
  @Column({ allowNull: false, type: DataType.STRING(11) })
  cpf: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.DATE })
  data_nascimento: Date;

  @Column({ allowNull: true, type: DataType.STRING(1) })
  sexo: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.TEXT })
  endereco: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(50) })
  bairro: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(50) })
  cidade: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(8) })
  cep: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(11) })
  telefone: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(100) })
  email: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.BOOLEAN })
  func_status: boolean;

  @NotNull
  @Column({ allowNull: false, type: DataType.BOOLEAN })
  admin_status: boolean;

  @Unique
  @Column({ allowNull: false, type: DataType.STRING(50) })
  usuario: string;

  @NotNull
  @Column({ allowNull: false, type: DataType.STRING(50) })
  senha: string;
}
