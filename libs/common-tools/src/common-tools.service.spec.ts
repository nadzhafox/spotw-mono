import { Test, TestingModule } from '@nestjs/testing';
import { CommonToolsService } from './common-tools.service';

describe('CommonToolsService', () => {
  let service: CommonToolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonToolsService],
    }).compile();

    service = module.get<CommonToolsService>(CommonToolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
