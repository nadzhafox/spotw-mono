import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';

export async function bootstrap(module: any) {
  // todo add config module
  // config module read .env
  // connect to redis and read config by json schema

  console.log(AppModule);
  const app = await NestFactory.create(module, new FastifyAdapter());
  // const configService = app.get('ConfigServiceToken')

  console.log(`Starting app ${process.env.HOST}:${process.env.PORT}`);

  await app.listen(process.env.PORT, process.env.HOST);
}
