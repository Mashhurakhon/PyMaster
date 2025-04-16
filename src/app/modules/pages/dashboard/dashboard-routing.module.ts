import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard-routes';
import { APP_ROUTES } from '../../../app-routes';
import { NotfoundComponent } from '../notfound/notfound.component';
import { NgModule } from '@angular/core';

export const DashboardRoutes: Routes = [
  {
    path: DASHBOARD_ROUTES.DASHBOARD,
    loadComponent: () =>
      import('./dashboard.component').then((c) => c.DashboardComponent),
    children: [
      {
        path: DASHBOARD_ROUTES.COURSES,
        loadChildren: () =>
          import('./../courses/course-routing.module').then((r) => r.CourseRoutes),
        title: 'Курсы',
      },
      {
        path: DASHBOARD_ROUTES.PROFILE,
        loadComponent: () =>
          import('./profile/profile.component').then((c) => c.ProfileComponent),
        title: 'Профиль',
      },
      {
        path: DASHBOARD_ROUTES.PROGRESS,
        loadComponent: () =>
          import('./progress/progress.component').then((c) => c.ProgressComponent),
        title: 'Прогресс',
      },
      {
        path: DASHBOARD_ROUTES.CERTIFICATES,
        loadComponent: () =>
          import('./certificates/certificates.component').then(
            (c) => c.CertificatesComponent
          ),
        title: 'Сертификаты',
      },
      {
        path: DASHBOARD_ROUTES.NOTIFICATIONS,
        loadComponent: () =>
          import('./notifications/notifications.component').then(
            (c) => c.NotificationsComponent
          ),
        title: 'Уведомления',
      },
    ] ,
    title: 'Панель управления',
  },
  {
    path: '',
    redirectTo: DASHBOARD_ROUTES.DASHBOARD,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardhRoutingModule {}
