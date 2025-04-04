import { Component } from '@angular/core';
import { CourseInterface } from '../../../core/models/course.interface';
import { APP_ROUTES } from '../../../app-routes';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from '../dashboard/dashboard-routes';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  public courses: CourseInterface[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      description:
        'Learn the core concepts of Angular and build real-world applications.',
      image: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      id: 2,
      title: 'React Basics',
      description:
        'Learn the fundamentals of React and build interactive web applications.',
      image: 'https://reactjs.org/logo-og.png',
    },
    {
      id: 3,
      title: 'Vue.js Essentials',
      description: 'Master Vue.js and build powerful web applications.',
      image: 'https://vuejs.org/images/logo.png',
    },
    {
      id: 4,
      title: 'Node.js and Express',
      description: 'Learn the fundamentals of Node.js and build RESTful APIs.',
      image: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      id: 5,
      title: 'MongoDB and Mongoose',
      description:
        'Learn the fundamentals of MongoDB and build real-world applications.',
      image: 'https://reactjs.org/logo-og.png',
    },
    {
      id: 6,
      title: 'Python Basics',
      description:
        'Learn the fundamentals of Python and build real-world applications.',
      image: 'https://vuejs.org/images/logo.png',
    },
  ];

  public getCoursePreview(id: number) {
    console.log(id);
  }
}
