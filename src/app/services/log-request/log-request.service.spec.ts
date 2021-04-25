import { Test, TestingModule } from '@nestjs/testing';
import { LogRequestService } from './log-request.service';

describe('LogRequestService', () => {
  let service: LogRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogRequestService],
    }).compile();

    service = module.get<LogRequestService>(LogRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
