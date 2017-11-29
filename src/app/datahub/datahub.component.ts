import { Component, OnInit } from '@angular/core';

import { HubConnection } from '@aspnet/signalr-client';
import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-datahub',
  templateUrl: './datahub.component.html',
  styleUrls: ['./datahub.component.css']
})
export class DatahubComponent implements OnInit {
  private _hubConnection: HubConnection;
  public async: any;
  public message = '';

  constructor() {
  }

  private updateMessage(): void {
    const messageP = document.getElementById('message');
    messageP.innerText = this.message;
  }

  ngOnInit() {
    this._hubConnection = new HubConnection('http://localhost:61812/DataHub');

    this._hubConnection.on('UpdateList', (data: any) => {
      this.message = data;
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
