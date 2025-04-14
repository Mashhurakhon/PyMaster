import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePreviewComponent } from './pages/course-preview/course-preview.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { CourseListComponent } from './pages/course-list/course-list.component';

export const CourseRoutes: Routes = [
    {
        path: '',
        component: CourseListComponent,
        title: 'Курсы'
    },
    {
        path: ':id',
        component: CoursePreviewComponent,
        title: 'Предварительный просмотр курса'
    },
    {
        path: ':id/lesson/:id',
        component: LessonComponent,
        title: 'Урок'
    }
];

@NgModule({
  imports: [RouterModule.forChild(CourseRoutes)],
  exports: [RouterModule],
})
export class CourseRoutesModule {}
