import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ThemeComponent } from '../../../shared/components/theme/theme.component';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [
    MatMenuTrigger,
    MatMenu,
    MatIcon,
    FormsModule,
    ThemeComponent
  ],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {
  public isChecked: boolean = false
}
