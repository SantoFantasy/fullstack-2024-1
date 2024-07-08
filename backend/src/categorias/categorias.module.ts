import { Module } from '@nestjs/common';
import { Categoria } from './categorias.model';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Categoria])],
  providers: [CategoriasService],
  controllers: [CategoriasController],
  exports: [CategoriasService],
})
export class CategoriasModule {}
