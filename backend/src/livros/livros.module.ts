import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './entities/livro.entity';
import { Livros_Autores } from 'src/autores/entities/livros-autores.entity';

@Module({
  imports: [SequelizeModule.forFeature([Livro, Livros_Autores])],
  controllers: [LivrosController],
  providers: [LivrosService],
  exports: [LivrosService],
})
export class LivrosModule {}
