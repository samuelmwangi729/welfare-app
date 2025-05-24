import { Test, TestingModule } from '@nestjs/testing';
import { DependantService } from './dependant.service';

describe('DependantService', () => {
  let service: DependantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DependantService],
    }).compile();

    service = module.get<DependantService>(DependantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
