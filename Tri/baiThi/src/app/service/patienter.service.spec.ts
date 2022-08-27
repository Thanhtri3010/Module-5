import { TestBed } from '@angular/core/testing';

import { PatienterService } from './patienter.service';

describe('PatienterService', () => {
  let service: PatienterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatienterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
