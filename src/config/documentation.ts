import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const docs = {
  endpoint: 'api-docs',
  title: 'Coffee API',
  description: 'Coffee API Documentation',
  version: '1.0',
  tags: ['coffee', 'api', 'nest'],
};

export function setupDocumentation(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle(docs.title)
    .setDescription(docs.description)
    .setVersion(docs.version);

  if (docs.tags) docs.tags.forEach(tag => options.addTag(tag));

  const swaggerOptions = options.build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(docs.endpoint, app, document);
}
