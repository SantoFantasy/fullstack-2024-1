import { Test, TestingModule } from '@nestjs/testing';
import { BibliotecariosService } from './bibliotecarios.service';

describe('BibliotecariosService', () => {
  let service: BibliotecariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibliotecariosService],
    }).compile();

    service = module.get<BibliotecariosService>(BibliotecariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
