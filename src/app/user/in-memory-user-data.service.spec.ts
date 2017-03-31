import { TestBed, inject } from '@angular/core/testing';

import { InMemoryUserDataService } from './in-memory-user-data.service';

describe('InMemoryUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryUserDataService]
    });
  });

  it('should ...', inject([InMemoryUserDataService], (service: InMemoryUserDataService) => {
    expect(service).toBeTruthy();
  }));
});
