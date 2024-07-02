import { Event } from 'src/entities/event';

export interface ProductServiceInterface {
  checkProductAvailibity(request: { [id: string]: number }): boolean;
  reduceStockQuantity(request: { [id: string]: number }): void;
  restockQuantity(request: { [id: string]: number }): void;
}
