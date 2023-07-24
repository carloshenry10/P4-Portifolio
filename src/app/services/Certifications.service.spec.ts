/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CertificationsService } from './Certifications.service';

describe('Service: Certifications', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificationsService]
    });
  });

  it('should ...', inject([CertificationsService], (service: CertificationsService) => {
    expect(service).toBeTruthy();
  }));
});
