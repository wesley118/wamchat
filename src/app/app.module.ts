import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { DatahubComponent } from './datahub/datahub.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataService } from './data.service';
import { BtcExchangeService } from './btc-exchange.service';
import { BtcMonitorComponent } from './btc-monitor/btc-monitor.component';
import { BtcHistoryChartComponent } from './btc-history-chart/btc-history-chart.component';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DatahubComponent,
    BtcMonitorComponent,
    BtcHistoryChartComponent,
    ChartTestComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    NgxChartsModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  providers: [DataService, BtcExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
