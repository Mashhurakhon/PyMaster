import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard-routes';
import { APP_ROUTES } from '../../../app-routes';
import { NotfoundComponent } from '../notfound/notfound.component';
import { NgModule } from '@angular/core';

export const DashboardRoutes: Routes = 
[
    {
        path: DASHBOARD_ROUTES.DASHBOARD,
        loadComponent: () => import('./progress/progress.component').then(
            c => c.ProgressComponent
        ),
        title: "Панель управления"
    },
    {
        path: DASHBOARD_ROUTES.COURSES,
        loadComponent: () => 
            import('./../courses/courses.component').then(
                (c) => c.CoursesComponent
            ),
        children: [
            {
                path: APP_ROUTES.COURSE_PREVIEW,
                loadComponent: () => 
                    import('./../courses/course-preview/course-preview.component').then(
                        (c) => c.CoursePreviewComponent
                    ),
                children: [
                    {
                        path: APP_ROUTES.COURSE_PREVIEW,
                        loadComponent: () => 
                            import('./../courses/course-preview/course-preview.component').then(
                                (c) => c.CoursePreviewComponent
                            ),
                    }
                ],
                title: "Предварительный просмотр курса"
            }
        ],
        title: "Курсы"
    },
    {
        path: DASHBOARD_ROUTES.PROFILE,
        loadComponent: () => 
            import('./profile/profile.component').then(
                (p) => p.ProfileComponent
            ),
        title: "Профиль"
    },
    {
        path: DASHBOARD_ROUTES.PROGRESS,
        loadComponent: () => 
            import('./progress/progress.component').then(
                (p) => p.ProgressComponent
            ),
        title: "Прогресс"
    },
    {
        path: DASHBOARD_ROUTES.CERTIFICATES,
        loadComponent: () => 
            import('./certificates/certificates.component').then(
                (c) => c.CertificatesComponent
            ),
        title: "Сертификаты"
    },
    {
        path: DASHBOARD_ROUTES.NOTIFICATIONS,
        loadComponent: () => 
            import('./notifications/notifications.component').then(
                (n) => n.NotificationsComponent
            ),
        title: "Уведомления"
    },
    {
        path: '',
        redirectTo: DASHBOARD_ROUTES.DASHBOARD,
        pathMatch: 'full'
    },
    {
        path: APP_ROUTES.NOTFOUND,
        component: NotfoundComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(DashboardRoutes)],
    exports: [RouterModule],
  })
  export class DashboardhRoutingModule {}