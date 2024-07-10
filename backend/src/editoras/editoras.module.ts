import { Module } from '@nestjs/common';
import { EditorasService } from './editoras.service';
import { EditorasController } from './editoras.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Editora } from './entities/editora.entity';

@Module({
  imports: [SequelizeModule.forFeature([Editora])],
  controllers: [EditorasController],
  providers: [EditorasService],
  exports: [EditorasService],
})
export class EditorasModule {}
