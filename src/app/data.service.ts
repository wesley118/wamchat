import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Counter } from './Counter';
import { Console } from '@angular/core/src/console';

@Injectable()
export class DataService {
  _hubConnection: HubConnection;
  counters: Observable<Counter[]>;
  c: Counter[];
  getCounters(): Observable<Counter[]> {
    return of(this.c);
  }
  printC(): void {
    console.log(JSON.stringify(this.c));
  }
  constructor() {
    this.init();
  }
  init(): void {
    this.c = new Array<Counter>();
    this._hubConnection = new HubConnection('http://localhost:61812/DataHub');
    this._hubConnection.on('UpdateList', (_data: any) => {
      const data = JSON.parse(_data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let item = null;
        item = this.c.find(a => a.typeName === data[i].Type);
        console.log(item);
        if (item !== undefined && item.count !== undefined) {
          item.count = data[i].Count;
        } else {
          console.log('new counter');
          const newCounter = new Counter();
          newCounter.count = data[i].Count;
          newCounter.typeName = data[i].Type;
          this.c.push(newCounter);
        }
      }
    });

    this._hubConnection.start()
      .then(() => {
        console.log('Hub connection started');
      })
      .catch(err => {
        console.error(err.message);
      });
  }
}

