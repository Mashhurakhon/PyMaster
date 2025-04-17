import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GuestComponent } from './guest.component';
import { APP_ROUTES } from '../../../app-routes';

export const GuestRoutingModule: Routes = [
  {
    path: APP_ROUTES.HOME,
    loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: APP_ROUTES.COURSES,
    loadChildren: () =>
      import('../courses/course-routing.module').then(
        (r) => r.CourseRoutes
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(GuestRoutingModule)],
  exports: [RouterModule],
})
export class DashboardhRoutingModule {}
