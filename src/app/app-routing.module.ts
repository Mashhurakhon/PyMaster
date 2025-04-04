import { Routes } from '@angular/router';
import { APP_ROUTES } from './app-routes';
import { DashboardRoutes } from './modules/pages/dashboard/dashboard-routing.module';
import { NotfoundComponent } from './modules/pages/notfound/notfound.component';

export const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    loadComponent: () =>
      import('./modules/pages/home/home.component').then(
        (c) => c.HomeComponent
      ),
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
  },
  {
    path: APP_ROUTES.COURSES,
    loadChildren: () =>
      import('./modules/pages/courses/course-routing.module').then(
        (r) => r.CourseRoutes
      ),
  },
  {
    path: APP_ROUTES.HOME,
    loadComponent: () =>
      import('./modules/pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    title: 'панель управления',
    children: DashboardRoutes,
    // canActivate: [AurhGuard]
  },
  {
    path: APP_ROUTES.NOTFOUND,
    component: NotfoundComponent,
    title: 'Страница не найдена',
  },
];
