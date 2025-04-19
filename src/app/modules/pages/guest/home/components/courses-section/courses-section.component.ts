import { Component } from '@angular/core';
import { CourseListComponent } from "../../../../courses/pages/course-list/course-list.component";
import { CourseInterface } from '../../../../../../core/models/course.interface';

@Component({
  selector: 'app-courses-section',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.scss'
})
export class CoursesSectionComponent {
  public courseList: CourseInterface[] = [
    {
      id: '1',
      title: 'Angular Fundamentals',
      description:
        'Learn the core concepts of Angular and build real-world applications.',
      image: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      id: '2',
      title: 'React Basics',
      description:
        'Learn the fundamentals of React and build interactive web applications.',
      image: 'https://reactjs.org/logo-og.png',
    },
    {
      id: '3',
      title: 'Vue.js Essentials',
      description: 'Master Vue.js and build powerful web applications.',
      image: 'https://vuejs.org/images/logo.png',
    },
    {
      id: '4',
      title: 'Node.js and Express',
      description: 'Learn the fundamentals of Node.js and build RESTful APIs.',
      image: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
  ]
}
