import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para que React (puerto 5173 o 3000) pueda consultar la API
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
