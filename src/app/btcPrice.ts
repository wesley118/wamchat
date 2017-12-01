
export class BtcExchange {
  name: string;
  prices: BtcPrice[];
  currentPrice: number;
}

export class BtcPrice {
  price: number;
  dateTime: string;
}
