import { Component, inject } from '@angular/core';
import { ThemeComponent } from '../../../../../shared/components/theme/theme.component';
import { ButtonComponent } from "../../../../../shared/components/button/button.component";
import { Location } from '@angular/common';
import { TheoryBlockComponent } from "../../components/lesson-components/theory-block/theory-block.component";
import { IllustrationComponent } from "../../components/lesson-components/illustration/illustration.component";

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [
    ThemeComponent,
    ButtonComponent,
    TheoryBlockComponent,
    IllustrationComponent
],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  private location = inject(Location);

  public theory = '<block><p>Текст теории по теме</p></block>'
  public img = 'https://angular.io/assets/images/logos/angular/angular.svg'
  public description = 'Angular'
  public goBack() {
    this.location.back();
  }
}
