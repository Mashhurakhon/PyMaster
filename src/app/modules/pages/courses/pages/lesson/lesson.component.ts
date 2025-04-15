import { Component, inject } from '@angular/core';
import { ThemeComponent } from '../../../../../shared/components/theme/theme.component';
import { ButtonComponent } from "../../../../../shared/components/button/button.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [
    ThemeComponent,
    ButtonComponent
],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  private location = inject(Location);
  public goBack() {
    this.location.back();
  }
}
