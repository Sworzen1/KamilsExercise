import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import validationOptions from './utils/validationOptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationOptions));

  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('be')
    .setDescription('API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      operationsSorter: 'alpha',
      tagsSorter: 'alpha',
    },
  });

  await app.listen(3000);
}
bootstrap();
