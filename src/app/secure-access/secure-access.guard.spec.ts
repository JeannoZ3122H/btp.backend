import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { secureAccessGuard } from './secure-access.guard';

describe('secureAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secureAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
