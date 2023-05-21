import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Supprime les propriétés non définies de l'objet
      forbidNonWhitelisted: true, // Rejette les objets contenant des propriétés non autorisées
    }),
  );

 

  await app.listen(5000);
}
bootstrap();
