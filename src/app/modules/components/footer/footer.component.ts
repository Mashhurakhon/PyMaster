import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
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
      link: "",
      title: "Курсы"
    },
    {
      link: "",
      title: "О нас"
    },
    {
      link: "",
      title: "Политика конфиденциальности"
    },
    {
      link: "",
      title: "Условия использования"
    },
    {
      link: "",
      title: "FAQ"
    },
    {
      link: "",
      title: "Контакты"
    },
  ]
}
