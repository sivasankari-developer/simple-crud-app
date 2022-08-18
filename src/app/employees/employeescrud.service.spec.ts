import { TestBed } from '@angular/core/testing';

import { EmployeescrudService } from './employeescrud.service';

describe('EmployeescrudService', () => {
  let service: EmployeescrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeescrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
