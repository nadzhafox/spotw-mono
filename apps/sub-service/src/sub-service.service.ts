import { Injectable } from '@nestjs/common';

@Injectable()
export class SubServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
