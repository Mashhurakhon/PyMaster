import { Routes } from '@angular/router';
import { APP_ROUTES } from './app-routes';
import { NotfoundComponent } from './modules/pages/notfound/notfound.component';
import { GuestRoutingModule } from './modules/pages/guest/guest-routing.module';

export const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    loadComponent: () =>
      import('./modules/pages/guest/guest.component').then(
        (c) => c.GuestComponent
      ),
    children: GuestRoutingModule,
    title: 'Главная',
  },
  {
    path: APP_ROUTES.AUTH,
    loadChildren: () =>
      import('./modules/pages/auth/auth-routing.module').then(
        (r) => r.AuthRoutes
      ),
    title: 'Авторизация',
  },
  {
    path: APP_ROUTES.DASHBOARD,
    loadChildren: () =>
      import('./modules/pages/dashboard/dashboard-routing.module').then(
        (r) => r.DashboardRoutes
      ),
    title: 'Панель управления',
    // canActivate: [AurhGuard]
  },
  
  {
    path: APP_ROUTES.NOTFOUND,
    component: NotfoundComponent,
    title: 'Страница не найдена',
  },
];
