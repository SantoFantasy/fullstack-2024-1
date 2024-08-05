import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { SearchLivro } from './dto/search-livro.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(@Body() createLivroDto: CreateLivroDto) {
    return this.livrosService.create(createLivroDto);
  }

  @Get()
  findAll(@Query() params: SearchLivro) {
    return this.livrosService.findAll(params.livro(), params.page, params.size);
  }

  @Get(':isbn')
  findOneByIsbn(@Param('isbn') isbn: string) {
    return this.livrosService.findOneByIsbn(isbn);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
    return this.livrosService.update(id, updateLivroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livrosService.remove(+id);
  }
}
