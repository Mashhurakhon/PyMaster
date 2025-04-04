import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { LessonComponent } from './lesson/lesson.component';

export const CourseRoutes: Routes = [
    {
        path: '',
        component: CoursesComponent,
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
