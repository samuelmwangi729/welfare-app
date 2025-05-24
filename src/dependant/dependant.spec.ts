import { Test, TestingModule } from '@nestjs/testing';
import { Dependant } from './dependant';

describe('Dependant', () => {
  let provider: Dependant;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Dependant],
    }).compile();

    provider = module.get<Dependant>(Dependant);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
