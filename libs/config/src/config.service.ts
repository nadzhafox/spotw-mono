import { Injectable, Inject } from '@nestjs/common';
import { REDIS_CONNECTION } from './redis-connection.provider';
import { readFile } from 'fs';
import { promisify } from 'util';

@Injectable()
export class ConfigService {
    constructor(@Inject(REDIS_CONNECTION) public redisClient: any) {

    }
    readFromEnv(name: string) {
        return process.env
    }

    async readFromJSON(path) {
        const file = await promisify(readFile)(path, { encoding: "utf-8" });
        const config = JSON.parse(file);
    }

    readFromRedis(key: string) {
        const config = this.redisClient.get(key);
    }
}
