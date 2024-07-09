import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LivrosService } from './livros.service';
import { Livro } from './livros.model';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async findAll() {
    return this.livrosService.findAll();
  }

  @Get('/:isbn')
  async findOne(@Param('isbn') isbn: string) {
    return this.livrosService.findOne(isbn);
  }

  @Delete('/remove/:isbn')
  async remove(@Param('isbn') isbn: string) {
    return this.livrosService.remove(isbn);
  }

  @Put('/update/:isbn')
  async update(@Param('isbn') isbn: string, @Body() livroUpdates: Livro) {
    return this.livrosService.update(isbn, livroUpdates);
  }

  @Post('/create')
  async create(@Body() livroData: Livro) {
    return this.livrosService.create(livroData);
  }
}
