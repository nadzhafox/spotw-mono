import { Injectable } from '@nestjs/common';
import { CommonToolsService } from "@sptw/common-tools"

@Injectable()
export class AppService {

  constructor(private commonToolsService: CommonToolsService) {

  }

  getHello(): string {
    return this.commonToolsService.returnHelloString();
    // return 'Hello core app!';
  }
}