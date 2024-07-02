// Importações necessárias
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  Unique,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  DefaultScope,
  Scopes,
  NotNull
} from 'sequelize-typescript';

// Modelo para Admin
@Table({ tableName: 'admin' })
class Admin extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_admin!: number;

  @NotNull
  @Column(DataType.STRING(50))
  usuario!: string;

  @NotNull
  @Column(DataType.STRING(50))
  senha!: string;
}

// Modelo para Bibliotecarios
@Table({ tableName: 'bibliotecarios' })
class Bibliotecarios extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_bibliotecario!: number;

  @NotNull
  @Column(DataType.STRING(50))
  usuario!: string;

  @NotNull
  @Column(DataType.STRING(50))
  senha!: string;
}

// Modelo para Categorias
@Table({ tableName: 'categorias' })
class Categorias extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_categoria!: number;

  @NotNull
  @Column(DataType.STRING(50))
  categoria!: string;

  @HasMany(() => Livros)
  livros!: Livros[];
}

// Modelo para Livros
@Table({ tableName: 'livros' })
class Livros extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  cod_catalogacao!: number;

  @Unique
  @AutoIncrement
  @Column
  cod_livro!: number;

  @NotNull
  @Column(DataType.STRING(255))
  titulo!: string;

  // Adicione os demais campos seguindo o padrão acima

  @ForeignKey(() => Categorias)
  @Column
  cod_categoria!: number;

  @BelongsTo(() => Categorias)
  categoria!: Categorias;
}

// Continue criando modelos para as demais tabelas seguindo o padrão acima
