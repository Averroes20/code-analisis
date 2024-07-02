import { randomUUID } from 'crypto';

type EventProps = {
  event_name: string;
  description: string;
  price: number;
  capacity: number;
  available: number;
};

export class Event {
  private _id: string;

  constructor(
    private props: EventProps,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get event_name(): string {
    return this.props.event_name;
  }

  get description(): string {
    return this.props.description;
  }

  get price(): number {
    return this.props.price;
  }

  get capacity(): number {
    return this.props.capacity;
  }

  get available(): number {
    return this.props.available;
  }

  set available(available: number) {
    this.props.available = available;
  }

  isStockSufficient(demandedAvailable: number): boolean {
    return this.props.available >= demandedAvailable;
  }
}
