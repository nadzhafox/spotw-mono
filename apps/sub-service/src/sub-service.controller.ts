import { Controller, Get } from '@nestjs/common';
import { SubServiceService } from './sub-service.service';

@Controller()
export class SubServiceController {
  constructor(private readonly subServiceService: SubServiceService) {}

  @Get()
  getHello(): string {
    return this.subServiceService.getHello();
  }
}
