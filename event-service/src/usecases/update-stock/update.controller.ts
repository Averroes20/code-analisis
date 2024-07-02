import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';
import { EventServiceInterface } from 'src/services/event.service.interface';

type UpdateStockMessage = {
  events: [
    {
      id: string;
      quantity: number;
    },
  ];
};

@Controller()
export class UpdateStockController {
  constructor(
    @Inject('product-service')
    private readonly service: EventServiceInterface,
  ) {}

  @MessagePattern('inventory.stock.reduce')
  reduceStockQuantity(@Payload() message: UpdateStockMessage) {
    console.info('Inventory Service: reduce stock quantity');

    this.service.reduceStockQuantity(
      message.events.reduce(
        (result, { id, quantity }) => ({ ...result, [id]: quantity }),
        {},
      ),
    );
    return {
      success: true,
    };
  }

  @MessagePattern('inventory.stock.restock')
  restockQuantity(@Payload() message: UpdateStockMessage) {
    console.info('Inventory Service: restock quantity');

    this.service.restockQuantity(
      message.events.reduce(
        (result, { id, quantity }) => ({ ...result, [id]: quantity }),
        {},
      ),
    );

    return {
      success: true,
    };
  }
}
