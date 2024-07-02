import { Event } from 'src/entities/event';

export interface EventRepositoryInterface {
  update(event: Event): void;
  findMany(ids: string[]): Event[];
  updateMany(events: Partial<Event>[]): void;
}
