import { Injectable, Inject } from '@nestjs/common';
import { REDIS_CONNECTION } from './redis-connection.provider';
import { readFile } from 'fs';
import { promisify } from 'util';
import { Value } from '@sinclair/typebox/value'
import { ConfigSchema } from './config.typebox';

@Injectable()
export class ConfigService {
  constructor(
    @Inject(REDIS_CONNECTION) public redisClient: any,
  ) { }

  readFromEnv(name: string) {
    return process.env;
  }

  private validation(data: unknown): ConfigSchema {
    const defaulted = Value.Default(ConfigSchema, data)
    const converted = Value.Convert(ConfigSchema, defaulted)
    const cleaned = Value.Clean(ConfigSchema, converted)
    return cleaned as ConfigSchema;
  }

  async get(key: 'postgres'): Promise<ConfigSchema> {
    const optionsFromRedis = {};

    for (const key of Object.keys(ConfigSchema.properties)) {
      optionsFromRedis[key] = await this.redisClient.get(
        `config:postgres:${key}`,
      );
    }

    return this.validation(optionsFromRedis);
  }

  // todo
  async readFromJSON(path) {
    const file = await promisify(readFile)(path, { encoding: 'utf-8' });
    const config = JSON.parse(file);
  }

  readFromRedis(key: string) {
    const config = this.redisClient.get(key);
  }

  createMassiveConnectOptions() {
    return 'createMassiveConnectOptions';
  }
}
