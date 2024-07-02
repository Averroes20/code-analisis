import { Event } from 'src/entities/event';
import { EventRepositoryInterface } from '../event.repository.interface';

export class EventRepository implements EventRepositoryInterface {
  private events: Event[] = [
    new Event(
      {
        event_name: 'Nobar Bola',
        description: 'asbdjkabkafkaskf',
        price: 999.99,
        capacity: 1000,
        available: 1,
      },
      'P001',
    ),
    new Event(
      {
        event_name: 'Event Tokopedia',
        description: 'asbdjkabkafkaskf',
        price: 599.99,
        capacity: 1000,
        available: 1,
      },
      'P002',
    ),
    new Event(
      {
        event_name: 'Event Shopee',
        description: 'asbdjkabkafkaskf',
        price: 89.99,
        capacity: 1000,
        available: 1,
      },
      'P003',
    ),
    new Event(
      {
        event_name: 'Event New Year',
        description: 'asbdjkabkafkaskf',
        price: 129.99,
        capacity: 1000,
        available: 1,
      },
      'P004',
    ),
    new Event(
      {
        event_name: 'Event Game',
        description: 'asbdjkabkafkaskf',
        price: 799.99,
        capacity: 1000,
        available: 1,
      },
      'P005',
    ),
    new Event(
      {
        event_name: 'Event Travel',
        description: 'asbdjkabkafkaskf',
        price: 299.99,
        capacity: 1000,
        available: 1,
      },
      'P006',
    ),
  ];

  update(event: Event): void {
    const index = this.events.findIndex((p) => p.id === event.id);
    if (index < 0) throw new Error('event Not found');
    this.events[index] = event;
  }

  findMany(ids: string[]): Event[] {
    return ids.reduce((found, id) => {
      const event = this.events.find((p) => p.id === id);
      if (event) found.push(event);
      return found;
    }, [] as Event[]);
  }

  updateMany(products: Partial<Event>[]): void {
    products.forEach((update) => {
      const product = this.events.find((p) => p.id === update.id);
      if (product) Object.assign(product, update);
    });
  }
}
