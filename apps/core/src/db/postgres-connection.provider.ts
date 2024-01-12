import { ConfigService } from '@sptw/config';
import { Client } from 'pg';
import { ConfigSchema } from '../config.typebox';

export const POSTGRES_CONNECTION = Symbol('POSTGRES_CONNECTION');

export const PostgresConnectionProvider = {
  provide: POSTGRES_CONNECTION,
  useFactory: async (
    configService: ConfigService,
  ) => {
    const options = await configService.get<ConfigSchema>('postgres');
    const client = new Client(options);
    await client.connect();
    // todo how to handle disconnect https://docs.nestjs.com/fundamentals/lifecycle-events
    return client;
  },
  inject: [ConfigService],
};
