import { TestBed } from '@angular/core/testing';

import { MyCounterService } from './my-counter.service';

describe('MyCounterService', () => {
  let service: MyCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
