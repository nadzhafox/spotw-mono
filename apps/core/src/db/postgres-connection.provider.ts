
import { ConfigService } from '@sptw/config';
import { Client, ClientConfig } from 'pg'

export const POSTGRES_CONNECTION = Symbol("POSTGRES_CONNECTION");

export const PostgresConnectionProvider = {
    provide: POSTGRES_CONNECTION,
    useFactory: async (configService: ConfigService, optionalProvider?: string) => {
        const optionsMap: Partial<Record<keyof ClientConfig, string>> = {
            user: "user",
            port: "port",
            database: "db-name",
            password: "password",
            host: "host"
        };

        const options: ClientConfig = {};
        for (const [key, value] of Object.entries(optionsMap)) {
            options[key] = await configService.redisClient.get(`config:postgres:${value}`);
        }

        const client = new Client(options)
        await client.connect()
        return client;
    },
    inject: [ConfigService, { token: 'SomeOptionalProvider', optional: true }],
};