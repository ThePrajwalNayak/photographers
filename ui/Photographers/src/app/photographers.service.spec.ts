import { TestBed, inject } from '@angular/core/testing';

import { PhotographersService } from './photographers.service';

describe('PhotographersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotographersService]
    });
  });

  it('should be created', inject([PhotographersService], (service: PhotographersService) => {
    expect(service).toBeTruthy();
  }));
});
