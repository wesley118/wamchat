
export class BtcExchange {
  name: string;
  prices: BtcPrice[];
  currentPrice: number;
  baseCurrency: string;
}

export class BtcPrice {
  price: number;
  dateTime: string;
  id: string;
  priceDate: string;
  cryptoCurrency: string;
  baseCurrency: string;
}

export class Exchange {
  id: string;
  name: string;
  type: string;
  prices: BtcPrice[];
}


