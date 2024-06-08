import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './livros/livros.model';
import dotenv from 'dotenv';
import { LivrosModule } from './livros/livros.module';
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
      models: [Livro],
    }),
    LivrosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
