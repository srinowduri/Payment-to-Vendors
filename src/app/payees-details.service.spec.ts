import { TestBed } from '@angular/core/testing';

import { PayeeDetailsService } from './payee-details.service';

describe('PayeesListService', () => {
  let service: PayeeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayeeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
