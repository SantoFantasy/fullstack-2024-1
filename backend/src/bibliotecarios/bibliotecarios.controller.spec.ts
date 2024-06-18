import { Test, TestingModule } from '@nestjs/testing';
import { BibliotecariosController } from './bibliotecarios.controller';

describe('BibliotecariosController', () => {
  let controller: BibliotecariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibliotecariosController],
    }).compile();

    controller = module.get<BibliotecariosController>(BibliotecariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
