import { TestBed } from '@angular/core/testing';

import { HikerService } from './hiker.service';

describe('HikerService', () => {
  let service: HikerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HikerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
