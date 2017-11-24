import { Component, OnInit } from '@angular/core';

import { HubConnection } from '@aspnet/signalr-client';

@Component({
  selector: 'app-datahub',
  templateUrl: './datahub.component.html',
  styleUrls: ['./datahub.component.css']
})
export class DatahubComponent implements OnInit {
  private _hubConnection: HubConnection;
  public async: any;
  message = '';
  messages: string[] = [];

  constructor() {
  }

  public sendMessage(): void {
    const data = `Sent: ${this.message}`;

    this._hubConnection.invoke('Send', data);
    this.messages.push(data);
  }
  public streamMessages(): void {
    this._hubConnection.stream('StreamMessages').subscribe({
      next: (msg: any) => {
        this.messages.push(msg);
      },
      error: () => { },
      complete: () => { }
    });
  }
  ngOnInit() {
    this._hubConnection = new HubConnection('http://localhost:61812/DataHub');

    this._hubConnection.on('Send', (data: any) => {
      const received = `Received: ${data}`;
      this.messages.push(received);
    });
    this._hubConnection.start()
      .then(() => {
        this.streamMessages();
        console.log('Hub connection started');
      })
      .catch(err => {
        console.error(err.message);
      });
  }



}
