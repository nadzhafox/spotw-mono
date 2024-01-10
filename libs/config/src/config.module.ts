import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import {
  createRedisConnectionProvider,
  IRedisConnectConfig,
} from './redis-connection.provider';

interface IConfigInputParams {
  // todo validationSchema type?
  validationSchema: any;
  redisConnectConfig: IRedisConnectConfig;
}

@Global()
export class ConfigModule {
  static register(configParams: IConfigInputParams): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        ConfigService,
        createRedisConnectionProvider(configParams.redisConnectConfig),
      ],
      exports: [ConfigService],
      // global: true
    };
  }
}
