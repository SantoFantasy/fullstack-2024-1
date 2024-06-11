import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './livros.model';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';

@Module({
  imports: [SequelizeModule.forFeature([Livro])],
  providers: [LivrosService],
  controllers: [LivrosController],
})
export class LivrosModule {}
