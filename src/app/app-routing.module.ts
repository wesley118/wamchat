import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatahubComponent } from './datahub/datahub.component';
import { BtcMonitorComponent } from './btc-monitor/btc-monitor.component';

const routes: Routes = [
  { path: 'datahub', component: DatahubComponent },
  { path: 'btcMonitor', component: BtcMonitorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
