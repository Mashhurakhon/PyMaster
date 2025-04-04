import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.apiUrl;
  req = req.clone({
    url: `${baseUrl}${req.url}`,
  })
  console.log('req', req);
  return next(req);
};
