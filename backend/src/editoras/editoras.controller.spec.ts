import { Test, TestingModule } from '@nestjs/testing';
import { EditorasController } from './editoras.controller';
import { EditorasService } from './editoras.service';

describe('EditorasController', () => {
  let controller: EditorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditorasController],
      providers: [EditorasService],
    }).compile();

    controller = module.get<EditorasController>(EditorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
