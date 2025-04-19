import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advantage-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './advantage-section.component.html',
  styleUrl: './advantage-section.component.scss'
})
export class AdvantageSectionComponent {
  public dataList = [
    {
      icon: "coding-web",
      title: "Реальная практика",
      description: "Получай опыт, выполняя практические задания и мини-проекты."
    },
    {
      icon: "lesson",
      title: " Интерактивные уроки",
      description: "Пошаговые материалы, понятные объяснения и живые примеры."
    },
    {
      icon: "time",
      title: "Отслеживание прогресса",
      description: "Следи за своими результатами и достигай новых уровней."
    },
    {
      icon: "certificate-check",
      title: "Сертификаты об окончании",
      description: "Получай подтверждение своих знаний и пополняй портфолио."
    }
  ]
}
