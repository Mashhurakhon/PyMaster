import { Component, HostListener, inject, ViewChild } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import {
  MatDrawerMode,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    SidenavComponent,
    DashboardHeaderComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public sidebarMode: MatDrawerMode = 'side';
  public hasBackDrop: boolean = false;
  public isOpen: boolean = true;
  public menuState: string = 'left';
  @HostListener('window:resize', ['$event'])
  public onResize() {
    const width = window.innerWidth;
    this.sidebarMode = width < 1024 ? "over" : "side";
    this.hasBackDrop = width < 1024 ? true : false;
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;
  public toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.menuState = this.isOpen ? 'left' : 'right';
    this.sidenav.toggle();
  }
}
