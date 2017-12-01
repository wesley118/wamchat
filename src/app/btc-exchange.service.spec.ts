import { TestBed, inject } from '@angular/core/testing';

import { BtcExchangeService } from './btc-exchange.service';

describe('BtcExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtcExchangeService]
    });
  });

  it('should be created', inject([BtcExchangeService], (service: BtcExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
