import { Inject } from '@nestjs/common';
import { EventServiceInterface } from './event.service.interface';
import { EventRepositoryInterface } from 'src/repositories/event.repository.interface';
import { Event } from 'src/entities/event';

export class EventService implements EventServiceInterface {
  constructor(
    @Inject('product-repository')
    private eventRepository: EventRepositoryInterface,
  ) {}

  checkProductAvailibity(request: { [id: string]: number }): boolean {
    const products = this.eventRepository.findMany(Object.keys(request));
    return products.every((product) =>
      product.isStockSufficient(request[product.id]),
    );
  }

  reduceStockAvailable(request: { [id: string]: number }): void {
    const products = this.eventRepository.findMany(Object.keys(request));
    products.forEach(
      (product, index, arr) => (arr[index].available -= request[product.id]),
    );
    this.eventRepository.updateMany(products);
  }

  restockAvailable(request: { [id: string]: number }): void {
    const products = this.eventRepository.findMany(Object.keys(request));
    products.forEach(
      (product, index, arr) => (arr[index].available += request[product.id]),
    );

    this.eventRepository.updateMany(products);
  }
}
