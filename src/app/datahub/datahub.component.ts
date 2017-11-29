import { Component, OnInit } from '@angular/core';

import { HubConnection } from '@aspnet/signalr-client';
import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Counter } from '../Counter';

import { DataService } from '../data.service';

@Component({
  selector: 'app-datahub',
  templateUrl: './datahub.component.html',
  styleUrls: ['./datahub.component.css']
})
export class DatahubComponent implements OnInit {
  private _hubConnection: HubConnection;
  public async: any;
  public message = '';
  counters: Counter[];
  getCounters(): void {
    this.dataService.getCounters().subscribe(c => this.counters = c);
    console.log(JSON.stringify(this.counters));
  }
  printCounters(): void {
    this.dataService.printC();
  }
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getCounters();
  }
}

