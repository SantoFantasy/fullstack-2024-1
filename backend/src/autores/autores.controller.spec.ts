import { Test, TestingModule } from '@nestjs/testing';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';

describe('AutoresController', () => {
  let controller: AutoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoresController],
      providers: [AutoresService],
    }).compile();

    controller = module.get<AutoresController>(AutoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
