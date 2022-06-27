import { TestBed } from '@angular/core/testing';

import { RutasTransporteService } from './rutas-transporte.service';

describe('RutasTransporteService', () => {
  let service: RutasTransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutasTransporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
