import { TestBed } from '@angular/core/testing';

import { Formdata } from './formdata';

describe('Formdata', () => {
  let service: Formdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Formdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
