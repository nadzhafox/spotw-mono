import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { RedisConnectionProvider } from './redis-connection.provider';

@Global()
@Module({
  providers: [ConfigService, RedisConnectionProvider],
  exports: [ConfigService]
})
export class ConfigModule { }
