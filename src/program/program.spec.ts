import { Test, TestingModule } from '@nestjs/testing';
import { Program } from './program';

describe('Program', () => {
  let provider: Program;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Program],
    }).compile();

    provider = module.get<Program>(Program);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
