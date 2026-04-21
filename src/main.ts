import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParse from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParse());

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  app.disable('x-powered-by');
  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
