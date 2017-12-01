import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcMonitorComponent } from './btc-monitor.component';

describe('BtcMonitorComponent', () => {
  let component: BtcMonitorComponent;
  let fixture: ComponentFixture<BtcMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
