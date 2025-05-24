import { Test, TestingModule } from '@nestjs/testing';
import { Reporting } from './reporting';

describe('Reporting', () => {
  let provider: Reporting;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Reporting],
    }).compile();

    provider = module.get<Reporting>(Reporting);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
