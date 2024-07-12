import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EditorasService } from './editoras.service';
import { CreateEditoraDto } from './dto/create-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';

@Controller('editoras')
export class EditorasController {
  constructor(private readonly editorasService: EditorasService) {}

  @Post()
  create(@Body() createEditoraDto: CreateEditoraDto) {
    return this.editorasService.create(createEditoraDto);
  }

  @Get()
  findAll() {
    return this.editorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editorasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEditoraDto: UpdateEditoraDto) {
    return this.editorasService.update(+id, updateEditoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorasService.remove(+id);
  }
}
