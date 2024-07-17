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
import { AutoresService } from './autores.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutoreDto } from './dto/update-autor.dto';
import { SearchAutor } from './dto/search-autor.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  create(@Body() createAutoreDto: CreateAutorDto) {
    return this.autoresService.create(createAutoreDto);
  }

  @Get()
  findAll(@Query() params: SearchAutor) {
    return this.autoresService.findAll(
      params.autor(),
      params.page,
      params.size,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutoreDto: UpdateAutoreDto) {
    return this.autoresService.update(+id, updateAutoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoresService.remove(+id);
  }
}
