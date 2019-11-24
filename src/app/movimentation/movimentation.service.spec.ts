import { TestBed } from '@angular/core/testing';

import { MovimentationService } from './movimentation.service';

describe('MovimentationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovimentationService = TestBed.get(MovimentationService);
    expect(service).toBeTruthy();
  });
});
