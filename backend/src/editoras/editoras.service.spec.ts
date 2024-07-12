import { Test, TestingModule } from '@nestjs/testing';
import { EditorasService } from './editoras.service';

describe('EditorasService', () => {
  let service: EditorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditorasService],
    }).compile();

    service = module.get<EditorasService>(EditorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
