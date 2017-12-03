import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcHistoryChartComponent } from './btc-history-chart.component';

describe('BtcHistoryChartComponent', () => {
  let component: BtcHistoryChartComponent;
  let fixture: ComponentFixture<BtcHistoryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcHistoryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcHistoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
