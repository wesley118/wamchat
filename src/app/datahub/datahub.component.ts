import { Component, OnInit } from '@angular/core';

import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Counter } from '../Counter';
import Chart from 'chart.js';

import { DataService } from '../data.service';

@Component({
  selector: 'app-datahub',
  templateUrl: './datahub.component.html',
  styleUrls: ['./datahub.component.css']
})
export class DatahubComponent implements OnInit {

  public message = '';
  counters: Counter[];
  private ctx: any;
  private labels: String[];
  private dataSet: number[];
  private colors: string[];
  setLabelsAndData(): void {
    for (let i = 0; i < this.counters.length; i++) {
      const item = this.counters[i];
      this.labels[i] = item.typeName;
      this.dataSet[i] = item.count;
      this.colors[i] = this.getColorString();
    }
  }
  private getColorString(): string {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  }
  initChart(): void {
    this.setLabelsAndData();
    this.ctx = document.getElementById('myChart');
    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: '# of events',
          data: this.dataSet,
          backgroundColor: this.colors,
          borderColor: this.colors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
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
    this.initChart();
  }
}

