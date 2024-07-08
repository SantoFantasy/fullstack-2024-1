import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './livros/livros.model';
import * as dotenv from 'dotenv';
import { LivrosModule } from './livros/livros.module';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasController } from './categorias/categorias.controller';
import { CategoriasService } from './categorias/categorias.service';
import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';
import { AdminsModule } from './admins/admins.module';
import { CategoriasModule } from './categorias/categorias.module';
import { BibliotecariosModule } from './bibliotecarios/bibliotecarios.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { BibliotecariosController } from './bibliotecarios/bibliotecarios.controller';
import { BibliotecariosService } from './bibliotecarios/bibliotecarios.service';
import { Categoria } from './categorias/categorias.model';
import { Usuario } from './usuarios/usuarios.model';
import { Admin } from './admins/admins.model';
import { Bibliotecarios } from './bibliotecarios/biblitecarios.model';
import { Funcionario } from './funcionarios/funcionarios.model';
dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'biblioteca',
      models: [Livro, Categoria, Usuario, Admin, Bibliotecarios, Funcionario],
    }),
    CategoriasModule,
    LivrosModule,
    UsuariosModule,
    AdminsModule,
    BibliotecariosModule,
    FuncionariosModule,
  ],
  controllers: [
    AppController,
    UsuariosController,
    CategoriasController,
    AdminsController,
    BibliotecariosController
  ],
  providers: [AppService],
})
export class AppModule {}
