import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  NotNull,
} from 'sequelize-typescript';

@Table({ tableName: 'admin' })
export class Admin extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_admin!: number;

  @NotNull
  @Column
  usuario!: string;

  @NotNull
  @Column
  senha!: string;
}
