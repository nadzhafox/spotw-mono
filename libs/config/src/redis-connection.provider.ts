import { createClient } from 'redis';

export const REDIS_CONNECTION = Symbol('REDIS_CONNECTION');

export interface IRedisConnectConfig {
    username: string;
    password: string;
    port?: number;
    host?: string;
}

export const createRedisConnectionProvider = ({
    username,
    password,
    port = 6379,
    host = '127.0.0.1',
}: IRedisConnectConfig) => ({
    provide: REDIS_CONNECTION,
    useFactory: async (): Promise<any> => {
        const client = await createClient({
            url: `redis://${username}:${password}@${host}:${port}`,
        })
            .on('error', (err) => console.log('Redis Client Error', err))
            .connect();
        // todo how to handle disconnect?
        // await client.disconnect();
        return client;
    },
});
