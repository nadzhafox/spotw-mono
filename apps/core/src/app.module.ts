import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { ConfigModule } from '@sptw/config';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    EventModule,
    // todo move to chassis lib
    ConfigModule.register({
      validationSchema: {},
      redisConnectConfig: {
        username: process.env.REDIS_CONFIG_USER,
        password: process.env.REDIS_CONFIG_USER_PASSWORD,
      },
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
