import { TestBed } from '@angular/core/testing';

import { CompositionListService } from './composition-list.service';

describe('CompositionListService', () => {
  let service: CompositionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompositionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
