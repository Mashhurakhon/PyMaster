import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from '../../pages/dashboard/dashboard-routes';

interface SidebarInterface {
  text: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  public currentRoute: string = '';
  public sidebar: SidebarInterface[] = [
    {
      text: 'Профиль',
      icon: 'profile',
      link: DASHBOARD_ROUTES.PROFILE,
    },
    {
      text: 'Курсы',
      icon: 'course',
      link: DASHBOARD_ROUTES.COURSES,
    },

    {
      text: 'Прогресс',
      icon: 'progress',
      link: DASHBOARD_ROUTES.PROGRESS,
    },
    {
      text: 'Сертификаты',
      icon: 'certificate',
      link: DASHBOARD_ROUTES.CERTIFICATES,
    },
    {
      text: 'Уведомления',
      icon: 'notification',
      link: DASHBOARD_ROUTES.NOTIFICATIONS,
    },
  ];
}
