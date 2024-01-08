import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';

export async function bootstrap(module: any) {
    // todo add config module 
    // config module read .env
    // connect to redis and read config by json schema
    const app = await NestFactory.create(module, new FastifyAdapter());
    await app.listen(3000);
}
