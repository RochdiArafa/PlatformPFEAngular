import { TestBed } from '@angular/core/testing';

import { UrlDBService } from './url-db.service';

describe('UrlDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlDBService = TestBed.get(UrlDBService);
    expect(service).toBeTruthy();
  });
});
