import { Module } from '@nestjs/common';
import { BibliotecariosService } from './bibliotecarios.service';
import { BibliotecariosController } from './bibliotecarios.controller';

@Module({
  providers: [BibliotecariosService],
  controllers: [BibliotecariosController],
})
export class BibliotecariosModule {}
