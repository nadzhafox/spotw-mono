import { Test, TestingModule } from '@nestjs/testing';
import { SubServiceController } from './sub-service.controller';
import { SubServiceService } from './sub-service.service';

describe('SubServiceController', () => {
  let subServiceController: SubServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubServiceController],
      providers: [SubServiceService],
    }).compile();

    subServiceController = app.get<SubServiceController>(SubServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(subServiceController.getHello()).toBe('Hello World!');
    });
  });
});
