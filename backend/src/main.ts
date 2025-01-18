import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for frontend communication

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
}

bootstrap();
