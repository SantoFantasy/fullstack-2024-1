import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoreDto } from './create-autor.dto';

export class UpdateAutoreDto extends PartialType(CreateAutoreDto) {}
