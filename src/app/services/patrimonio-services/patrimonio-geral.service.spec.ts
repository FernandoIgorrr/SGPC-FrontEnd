import { TestBed } from '@angular/core/testing';

import { PatrimonioGeralService } from './patrimonio-geral.service';

describe('PatrimonioGeralService', () => {
  let service: PatrimonioGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatrimonioGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
