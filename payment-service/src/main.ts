import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: config().services.payment.clientId,
        brokers: [config().broker],
      },
      consumer: {
        groupId: config().services.payment.groupId,
      },
    },
  });

  await app.startAllMicroservices();
}
bootstrap();
