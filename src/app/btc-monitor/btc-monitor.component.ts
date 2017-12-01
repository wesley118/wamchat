import { Component, OnInit } from '@angular/core';
import { BtcPrice, BtcExchange } from '../btcPrice';
import { BtcExchangeService } from '../btc-exchange.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-btc-monitor',
  templateUrl: './btc-monitor.component.html',
  styleUrls: ['./btc-monitor.component.css']
})
export class BtcMonitorComponent implements OnInit {
  exchanges: Array<BtcExchange>;
  charts: Chart[];

  setupCharts(): void {
    console.log('setupChartsCalled');
    for (let i = 0; i < this.exchanges.length; i++) {
      const item = this.exchanges[i];
      if (i > this.charts.length - 1) {


        const ctx = document.getElementById(`chart${this.exchanges[i].name}`);
        const data = [];
        const labels = [];
        for (let x = 0; x < item.prices.length; x++) {
          labels.push('');
          data.push(item.prices[x].price);
        }
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: data,
          }
        });
        this.charts.push(chart);
      } else {
        const chart = this.charts[i];
        chart.data.labels.push('');
        chart.data.datasets.forEach((dataset) => {
          dataset.data.push(item.currentPrice);
        });
      }
    }
  }
  updateCharts(): void {

  }
  getxchanges(): void {
    this.btcExchangeService.getExchanges().subscribe(a => {
      this.exchanges = a;

    }, err => {
      console.log(`error: ${err}`);
    }, () => {
      this.setupCharts();
    });
  }
  constructor(private btcExchangeService: BtcExchangeService) { }

  ngOnInit() {
    this.getxchanges();
  }

}
