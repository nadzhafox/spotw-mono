import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { VALIDATION_SCHEMA } from './consts';
import { configInitProvider } from './config-init.provider';



@Module({})
export class ConfigModule {
  static register({ configSchema }: { configSchema: any }): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        ConfigService,
        {
          provide: VALIDATION_SCHEMA,
          useValue: configSchema
        },
        configInitProvider
      ],
      exports: [ConfigService],
      global: true
    };
  }
}
