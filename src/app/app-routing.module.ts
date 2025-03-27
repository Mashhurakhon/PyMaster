import { Routes } from '@angular/router';
import { APP_ROUTES } from './app-routes';
import { DashboardRoutes } from './modules/pages/dashboard/dashboard-routing.module';
import { NotfoundComponent } from './modules/pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: APP_ROUTES.HOME, 
        loadComponent: () => 
        import('./modules/pages/home/home.component').then(m => m.HomeComponent),
        title: "Главная"
    },
    {
        path: APP_ROUTES.AUTH,
        loadChildren: () => 
        import('./modules/pages/auth/auth-routing.module').then(m => m.AuthRoutingModule),
        title: "Авторизация",
    },
    {
        path: APP_ROUTES.COURSES,
        loadComponent: () => 
        import('./modules/pages/courses/courses.component').then(m => m.CoursesComponent),
        title: "Курсы",
        children: [
            {
                path: APP_ROUTES.COURSE_PREVIEW,
                loadComponent: () => import('./modules/pages/courses/course-preview/course-preview.component').then(m => m.CoursePreviewComponent),
                title: "Предварительный просмотр курса",
                children: [
                    {
                        path: APP_ROUTES.COURSE_LESSON,
                        loadComponent: () => import('./modules/pages/courses/lesson/lesson.component').then(m => m.LessonComponent),
                        title: "Урок",
                        // canActivate: [AurhGuard] 
                    }
                ]
            },
            
        ]
    },
    {
        path: APP_ROUTES.DASHBOARD,
        loadComponent: () => import('./modules/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: "панель управления",
        children: DashboardRoutes,
        // canActivate: [AurhGuard]
    },
    {
        path: APP_ROUTES.NOTFOUND,
        component: NotfoundComponent,
        title: "Not Found"
    },
];
