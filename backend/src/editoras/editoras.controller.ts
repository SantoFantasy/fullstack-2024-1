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
import { EditorasService } from './editoras.service';
import { CreateEditoraDto } from './dto/create-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';
import { SearchEditora } from './dto/search-editora.dto';

@Controller('editoras')
export class EditorasController {
  constructor(private readonly editorasService: EditorasService) {}

  @Post()
  create(@Body() createEditoraDto: CreateEditoraDto) {
    return this.editorasService.create(createEditoraDto);
  }

  @Get()
  findAll(@Query() params: SearchEditora) {
    return this.editorasService.findAll(
      params.editora(),
      params.page,
      params.size,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.editorasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEditoraDto: UpdateEditoraDto) {
    return this.editorasService.update(id, updateEditoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.editorasService.remove(id);
  }
}
