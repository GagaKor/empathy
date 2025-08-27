import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import session from 'express-session';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { PiiLogger } from './logger/pii-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new PiiLogger(),
  });
  const config = app.get(ConfigService);

  app.setGlobalPrefix('api');

  app.use(
    session({
      secret: config.get('SESSION_SECRET') || 'change-me',
      resave: false,
      saveUninitialized: false,
    })
  );

  await app.listen(config.get('PORT') || 3000);
}

bootstrap();
