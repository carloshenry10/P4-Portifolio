/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchoolingService } from './Schooling.service';

describe('Service: Schooling', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolingService]
    });
  });

  it('should ...', inject([SchoolingService], (service: SchoolingService) => {
    expect(service).toBeTruthy();
  }));
});
