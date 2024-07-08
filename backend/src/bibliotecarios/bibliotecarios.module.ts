import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BibliotecariosService } from './bibliotecarios.service';
import { BibliotecariosController } from './bibliotecarios.controller';
import { Bibliotecarios } from './biblitecarios.model';

@Module({
  imports: [SequelizeModule.forFeature([Bibliotecarios])],
  providers: [BibliotecariosService],
  controllers: [BibliotecariosController],
  exports: [BibliotecariosService],
})
export class BibliotecariosModule {}
