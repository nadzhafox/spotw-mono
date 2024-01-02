import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CommonToolsModule } from '@sptw/common-tools';

@Module({
  // imports: [CommonToolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
