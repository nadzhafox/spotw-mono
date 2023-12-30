import { Module } from '@nestjs/common';
import { SubServiceController } from './sub-service.controller';
import { SubServiceService } from './sub-service.service';

@Module({
  imports: [],
  controllers: [SubServiceController],
  providers: [SubServiceService],
})
export class SubServiceModule {}
