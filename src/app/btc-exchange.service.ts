import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

@Injectable()
export class BtcExchangeService {
  _hubConnection: HubConnection;
  startHub(): void {
    this._hubConnection = new HubConnection('http://localhost:61812/btcExchange');
    this._hubConnection.on('BtcUpdate', (data: any) => {

    });
    this._hubConnection.start().then(() => {
      // log.verbose('hubConnected')
    }).catch();
  }
  constructor() { }

}
