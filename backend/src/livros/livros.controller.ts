import { Controller, Delete, Get } from '@nestjs/common';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async findAll() {
    return this.livrosService.findAll();
  }

  @Get('/:isbn')
  async findOne(isbn: string) {
    return this.livrosService.findOne(isbn);
  }

  @Delete('/remove/:isbn')
  async remove(isbn: string) {
    return this.livrosService.remove(isbn);
  }
}
