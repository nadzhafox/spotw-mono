import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonToolsService {
    returnHelloString() {
        return 'Hello from common tools service!!!!'
    }
}
