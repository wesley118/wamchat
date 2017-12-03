import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.css']
})
export class ChartTestComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  autoScale = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  setData(): void {
    this.multi = multi;
    this.single = single;
  }
  // line, area

  constructor() {
    // Object.assign(this, { single, multi });
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
    this.setData();
  }

}

class ChartData {
  name: string;
  series: [{
    name: string;
    value: number;
  }];
}

