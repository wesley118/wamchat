import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { catchError, map, tap } from 'rxjs/operators';

import { BtcPrice, Exchange } from '../btcPrice';
import { BtcExchangeService } from '../btc-exchange.service';
import { Chart } from 'chart.js';
import { window } from 'rxjs/operators/window';
import { multi } from '../chart-test/data';



@Component({
  selector: 'app-btc-history-chart',
  templateUrl: './btc-history-chart.component.html',
  styleUrls: ['./btc-history-chart.component.css']
})
export class BtcHistoryChartComponent implements AfterViewInit {
  exchange: Exchange;
  histChart: Chart;
  multi: any[];

  view: any[] = [1920, 800];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  autoScale = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  getExchange(): void {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(`name: ${name}`);
    this.btcService.getExchangeHistory(name).toPromise().then(e => {
      this.exchange = e;
      // console.log(`exchange: ${JSON.stringify(this.exchange)}`);
      this.setUpChart();
    }).catch(err => {
      console.log(`caughtError: ${err}`);
    });
  }
  setUpChart(): void {
    const name = this.exchange.name;
    const points = [];
    console.log(`exchange prices length: ${this.exchange.prices.length}`);
    for (let i = 0; i < this.exchange.prices.length; i++) {
      points.push({
        'name': this.exchange.prices[i].priceDate,
        'value': this.exchange.prices[i].price,
      });
    }
    this.multi = [{
      'name': `${name}`,
      'series': points
    }];
  }
  constructor(private route: ActivatedRoute, private btcService: BtcExchangeService) {
    this.multi = [{
      'name': 'btc',
      'series': [{
        'name': 'test',
        'value': 54
      }]
    }];
  }


  ngAfterViewInit() {
    this.getExchange();
  }

}
