import { TestBed } from '@angular/core/testing';

import { TemplatePFEService } from './template-pfe.service';

describe('TemplatePFEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplatePFEService = TestBed.get(TemplatePFEService);
    expect(service).toBeTruthy();
  });
});
