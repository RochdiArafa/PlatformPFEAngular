import { TestBed } from '@angular/core/testing';

import { TemplateIntershipAgreementService } from './template-intership-agreement.service';

describe('TemplateIntershipAgreementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplateIntershipAgreementService = TestBed.get(TemplateIntershipAgreementService);
    expect(service).toBeTruthy();
  });
});
