import { NestFactory } from '@nestjs/core';
import { SubServiceModule } from './sub-service.module';

async function bootstrap() {
  const app = await NestFactory.create(SubServiceModule);
  await app.listen(3001);
}
bootstrap();
