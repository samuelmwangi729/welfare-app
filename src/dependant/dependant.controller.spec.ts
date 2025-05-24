import { Test, TestingModule } from '@nestjs/testing';
import { DependantController } from './dependant.controller';

describe('DependantController', () => {
  let controller: DependantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DependantController],
    }).compile();

    controller = module.get<DependantController>(DependantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
