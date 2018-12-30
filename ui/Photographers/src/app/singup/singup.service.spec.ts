import { TestBed, inject } from '@angular/core/testing';

import { SingupService } from './singup.service';

describe('SingupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingupService]
    });
  });

  it('should be created', inject([SingupService], (service: SingupService) => {
    expect(service).toBeTruthy();
  }));
});
