import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  NotNull,
} from 'sequelize-typescript';

@Table
export class Admin extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_admin!: number;

  @NotNull
  @Column({ allowNull: false })
  usuario!: string;

  @NotNull
  @Column({ allowNull: false })
  senha!: string;
}
