import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseInterface, CourseStructureInterface } from '../models/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private _http: HttpClient) {}

  getCourses(): Observable<CourseInterface> {
    return this._http.get<CourseInterface>('/courses');
  }

  getCourseById(id: string): Observable<CourseInterface> {
    return this._http.get<CourseInterface>(`/courses/${id}`);
  }

  getCourseStructureById(id: string): Observable<CourseStructureInterface> {
    return this._http.get<CourseStructureInterface>(`/courses/${id}/structure`);
  }

  createCourse(course: CourseInterface): Observable<CourseInterface> {
    return this._http.post<CourseInterface>('/courses', course);
  }

  deleteCourse(id: string): Observable<void> {
    return this._http.delete<void>(`/courses/${id}`);
  }

}
