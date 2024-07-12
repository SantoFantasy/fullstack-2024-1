import { Module } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { AutoresController } from './autores.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Autor } from './entities/autor.entity';
import { Livros_Autores } from './entities/livros-autores.entity';

@Module({
  imports: [SequelizeModule.forFeature([Autor, Livros_Autores])],
  controllers: [AutoresController],
  providers: [AutoresService],
  exports: [AutoresService],
})
export class AutoresModule {}
