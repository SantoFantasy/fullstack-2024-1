import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './entities/livro.entity';

@Module({
  imports: [SequelizeModule.forFeature([Livro])],
  controllers: [LivrosController],
  providers: [LivrosService],
  exports: [LivrosService],
})
export class LivrosModule {}
