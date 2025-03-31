import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Move2Fit')
      .setDescription('Projeto Fitness')
      .setContact(
        'Grupo 02',
        'https://github.com/Power-Of-Three',
        'https://github.com/Power-Of-Three',
      )
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/swagger', app, document);

    process.env.TZ = '-03:00';

    app.useGlobalPipes(new ValidationPipe());

    app.enableCors();

    await app.listen(process.env.PORT ?? 3000);

    console.log(`A aplicação está sendo executada em: ${await app.getUrl()}`);
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
    process.exit(1);
  }
}

bootstrap().catch((error) => {
  console.error('Erro deconhecido no bootstrap:', error);
  process.exit(1);
});
