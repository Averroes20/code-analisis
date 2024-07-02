import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import config from './config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: config().services.event.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config().services.book.clientId,
            brokers: [config().broker],
          },
          consumer: {
            groupId: config().services.event.groupId,
          },
        },
      },
      {
        name: config().services.payment.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config().services.book.clientId,
            brokers: [config().broker],
          },
          consumer: {
            groupId: config().services.payment.groupId,
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
