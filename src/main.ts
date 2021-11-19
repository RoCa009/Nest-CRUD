import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger' 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setDescription("CRUD de Usuarios básico con NestJS")
  .setTitle("User's CRUD")
  .setDescription('Versión experimental')
  .setVersion('1.2')
  .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document);

  await app.listen(3005);
}
bootstrap();
