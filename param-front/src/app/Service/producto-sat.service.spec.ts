import { TestBed } from '@angular/core/testing';

import { ProductoSatService } from './producto-sat.service';

describe('ProductoSat.Service', () => {
  let service: ProductoSatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoSatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
