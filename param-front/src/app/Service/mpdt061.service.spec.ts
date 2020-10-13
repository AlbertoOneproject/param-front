import { TestBed } from '@angular/core/testing';

import { Mpdt061Service } from './mpdt061.service';

describe('Mpdt061Service', () => {
  let service: Mpdt061Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mpdt061Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
