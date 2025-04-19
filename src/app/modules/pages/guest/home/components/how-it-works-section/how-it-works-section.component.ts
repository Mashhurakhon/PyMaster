import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './how-it-works-section.component.html',
  styleUrl: './how-it-works-section.component.scss'
})
export class HowItWorksSectionComponent {
  public dataList = [
    {
      icon: "register",
      title: "Пройди регистрацию",
      description: "Создай аккаунт и выбери интересующие курсы."
    },
    {
      icon: "blackboard",
      title: "Изучай материалы",
      description: "Проходи уроки, смотри примеры и читай объяснения."
    },
    {
      icon: "task",
      title: "Выполняй задания",
      description: "Применяй знания на практике с интерактивными задачами."
    },
    {
      icon: "certificate",
      title: "Получай сертификаты",
      description: "Завершай курсы и добавляй сертификаты в своё портфолио."
    },
  ]
}
