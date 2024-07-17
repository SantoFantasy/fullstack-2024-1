import { Type } from 'class-transformer';

export class Pageable {
  @Type(() => Number)
  size: number = 10;
  @Type(() => Number)
  page: number = 0;
}
