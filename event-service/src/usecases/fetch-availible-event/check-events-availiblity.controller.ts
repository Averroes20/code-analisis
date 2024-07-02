import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';
import { EventServiceInterface } from 'src/services/event.service.interface';

type CheckProductsAvailibilityMessage = {
  products: [
    {
      id: string;
      quantity: number;
    },
  ];
};

@Controller()
export class CheckProductAvailibityController {
  constructor(
    @Inject('product-service')
    private readonly service: EventServiceInterface,
  ) {}

  @MessagePattern('inventory.products.get')
  checkProductAvailibity(@Payload() message: CheckProductsAvailibilityMessage) {
    return {
      availible: this.service.checkProductAvailibity(
        message.products.reduce(
          (result, { id, quantity }) => ({ ...result, [id]: quantity }),
          {},
        ),
      ),
    };
  }
}
