import { Module } from '@nestjs/common';
import { CommonToolsService } from './common-tools.service';

@Module({
  providers: [CommonToolsService],
  exports: [CommonToolsService],
})
export class CommonToolsModule {}
