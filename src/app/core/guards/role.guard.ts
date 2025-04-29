import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const RoleGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const roles = route.data['roles'];
  const userRole = localStorage.getItem('role');

  if(!userRole || !roles.includes(userRole)) {
    _router.navigate(['/']);
    return false;
  }
  return true;
};
