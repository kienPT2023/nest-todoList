import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE, OPTIONS, PUT',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(8080);
}
bootstrap();
