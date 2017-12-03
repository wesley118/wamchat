import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatahubComponent } from './datahub/datahub.component';
import { BtcMonitorComponent } from './btc-monitor/btc-monitor.component';
import { BtcHistoryChartComponent } from './btc-history-chart/btc-history-chart.component';
import { ChartTestComponent } from './chart-test/chart-test.component';

const routes: Routes = [
  { path: 'datahub', component: DatahubComponent },
  { path: 'btcMonitor', component: BtcMonitorComponent },
  { path: 'btcHistory/:name', component: BtcHistoryChartComponent },
  { path: 'chart', component: ChartTestComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
