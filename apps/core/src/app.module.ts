import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { ConfigModule } from '@sptw/config';
import { DbModule } from './db/db.module';
import { ConfigSchema } from './config.typebox';

@Module({
  imports: [
    EventModule,
    ConfigModule.register({
      configSchema: ConfigSchema,
    }),
    DbModule,
    // MassiveModule.registerAsync({
    //   useFactory: (configService) => {
    //     console.log({ configService });
    //     return configService.createMassiveConnectOptions();
    //   },
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
