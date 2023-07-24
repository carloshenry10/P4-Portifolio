/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorksService } from './Works.service';

describe('Service: Works', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorksService]
    });
  });

  it('should ...', inject([WorksService], (service: WorksService) => {
    expect(service).toBeTruthy();
  }));
});
