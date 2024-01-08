
import { createClient } from 'redis';

export const REDIS_CONNECTION = Symbol("REDIS_CONNECTION");

export const RedisConnectionProvider = {
    provide: REDIS_CONNECTION,
    // todo solution no return redis client
    useFactory: async (optionsProviderSchema: any, optionalProvider?: string): Promise<any> => {
        // todo use safeParse, handle error?
        // const validConfig = redisEnvCredential.parse(process.env);
        const validConfig = process.env;
        const client = await createClient({ username: validConfig.REDIS_CONFIG_USER, password: validConfig.REDIS_CONFIG_USER_PASSWORD })
            .on('error', err => console.log('Redis Client Error', err))
            .connect();
        // todo how to handle connections?
        // await client.disconnect();
        return client;
    },
};