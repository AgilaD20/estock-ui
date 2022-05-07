import { TestBed } from '@angular/core/testing';

import { CompanyRegistrationServiceService } from './company-registration-service.service';

describe('CompanyRegistrationServiceService', () => {
  let service: CompanyRegistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyRegistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
