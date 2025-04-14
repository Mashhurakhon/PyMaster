import { Component, signal } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { CourseInfoComponent } from '../../components/course-info/course-info.component';
import { CourseInterface } from '../../../../../core/models/course.interface';

@Component({
  selector: 'app-course-preview',
  standalone: true,
  imports: [MatExpansionModule, CourseInfoComponent],
  templateUrl: './course-preview.component.html',
  styleUrl: './course-preview.component.scss',
})
export class CoursePreviewComponent {
  readonly panelOpenState = signal(false);

  public course: CourseInterface = {
    id: '1',
    title: 'Angular Fundamentals',
    description:
      'Learn the fundamentals of Angular. Learn the fundamentals of Angular. Learn the fundamentals of Angular',
    image: 'https://angular.io/assets/images/logos/angular/angular.svg',
  };
}
