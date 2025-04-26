import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let isAuthenticated = localStorage.getItem("token");

  if(!isAuthenticated) {
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
};
