import { Component, Input } from '@angular/core';
import { CourseInterface } from '../../../../../core/models/course.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [NgClass],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.scss',
})
export class CourseInfoComponent {
  @Input({ required: true }) course!: CourseInterface;
  @Input({ required: true }) view: 'card' | 'detail' = 'card';
}
