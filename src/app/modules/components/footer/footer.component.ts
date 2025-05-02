import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public links = [
    {
      link: "",
      title: "Главная"
    },
    {
      link: "courses/",
      title: "Курсы"
    },
    {
      link: "about/",
      title: "О нас"
    },
    {
      link: "policy/",
      title: "Политика конфиденциальности"
    },
    {
      link: "terms/",
      title: "Условия использования"
    },
    {
      link: "faq/",
      title: "FAQ"
    },
    {
      link: "contacts/",
      title: "Контакты"
    },
  ]
}
