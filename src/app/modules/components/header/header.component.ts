import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from "../../../shared/components/theme/theme.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ThemeComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isChecked: boolean = false;

  public links = [
    {
      link: '',
      text: 'Главная'
    },
    {
      link: 'courses/',
      text: 'Курсы'
    },
    {
      link: 'contacts/',
      text: 'Контакты'
    },
    {
      link: 'about/',
      text: 'О нас'
    }
  ]
}
