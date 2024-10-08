import { CanActivateFn } from '@angular/router';

export const secureAccessGuard: CanActivateFn = (route, state) => {
  return true;
};
