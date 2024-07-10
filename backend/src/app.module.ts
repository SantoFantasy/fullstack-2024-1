import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { EditorasModule } from './editoras/editoras.module';
import { Editora } from './editoras/entities/editora.entity';
import { AutoresModule } from './autores/autores.module';
import { Autor } from './autores/entities/autor.entity';
import { LivrosModule } from './livros/livros.module';
import { Livro } from './livros/entities/livro.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Livros_Autores } from './autores/entities/livros-autores.entity';
import { Emprestimo } from './usuarios/entities/emprestimos.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
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
      models: [Editora, Autor, Livro, Livros_Autores, Emprestimo, Usuario],
      autoLoadModels: true,
      sync: { force: false },
    }),
    EditorasModule,
    AutoresModule,
    LivrosModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
