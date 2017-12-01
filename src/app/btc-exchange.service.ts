import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { BtcPrice, BtcExchange } from './btcPrice';
import { of } from 'rxjs/observable/of';
import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BtcExchangeService {
  private _hubConnection: HubConnection;
  exchanges: Array<BtcExchange>;
  getExchanges(): Observable<BtcExchange[]> {
    return of(this.exchanges);
  }
  updateExchanges(_data): void {
    const data = JSON.parse(_data);
    let e = this.exchanges.find(a => a.name === data.exchange);
    if (e === undefined || e === null) {
      e = new BtcExchange();
      e.name = data.exchange;
      e.prices = new Array<BtcPrice>();
      this.exchanges.push(e);
    }
    const price = new BtcPrice();
    price.price = data.price;
    price.dateTime = data.date;
    e.currentPrice = data.price;
    e.prices.push(price);
  }
  startHub(): void {
    this.exchanges = new Array<BtcExchange>();
    this._hubConnection = new HubConnection('http://localhost:61812/btcExchange');
    this._hubConnection.on('BtcUpdate', (data: any) => {
      // console.log(`data: ${data}`);
      this.updateExchanges(data);
    });
    this._hubConnection.start().then(() => {
      // log.verbose('hubConnected')
    }).catch();
  }
  constructor() {
    this.startHub();
  }

}