import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`Server running on http://localhost:${PORT}`);
}
bootstrap();
