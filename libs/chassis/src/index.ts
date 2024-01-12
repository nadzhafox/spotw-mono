import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { ConfigService } from '@sptw/config';

export async function bootstrap(module: any) {
  const app = await NestFactory.create(module, new FastifyAdapter());
  const configService = app.get(ConfigService);
  const { port, host } = configService.get<{ app: { port: number, host: string } }>('app');

  await app.listen(port, host);
}
