import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { envVariables } from './config/variables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: envVariables.frontendUrl,
  });
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  await app.listen(envVariables.port);
}
bootstrap();
