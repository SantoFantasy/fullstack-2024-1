import { PartialType } from '@nestjs/mapped-types';
import { CreateAutorDto } from './create-autor.dto';

export class UpdateAutoreDto extends PartialType(CreateAutorDto) {}
