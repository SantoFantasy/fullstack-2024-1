import { PartialType } from '@nestjs/mapped-types';
import { CreateEditoraDto } from './create-editora.dto';

export class UpdateEditoraDto extends PartialType(CreateEditoraDto) {}
