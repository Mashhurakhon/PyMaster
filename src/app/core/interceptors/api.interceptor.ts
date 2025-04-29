import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const _localStorage = inject(LocalstorageService);
  const baseUrl = environment.apiUrl;
  req = req.clone({
    url: `${baseUrl}${req.url}`,
  });

  const token = _localStorage.get("accessToken");
  // if(token) {
  //   req = req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  // }
  return next(req);
};
