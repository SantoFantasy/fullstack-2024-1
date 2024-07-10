import { Test, TestingModule } from '@nestjs/testing';
import { AutoresService } from './autores.service';

describe('AutoresService', () => {
  let service: AutoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoresService],
    }).compile();

    service = module.get<AutoresService>(AutoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
