import { TestBed } from '@angular/core/testing';

import { ProfitService } from './profit.service';

describe('ProfitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfitService = TestBed.get(ProfitService);
    expect(service).toBeTruthy();
  });
});
