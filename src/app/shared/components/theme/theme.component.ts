import { Component, inject } from '@angular/core';
import { LocalstorageService } from '../../../core/services/localstorage.service';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  public html = document.querySelector("html") as HTMLElement;
  public themeIcon: string = "moon";
  private _localStorage = inject(LocalstorageService);
  

  public toggleTheme() {    
    if(this._localStorage.get("theme") === "dark") {
      this._localStorage.set('theme', 'light');
      this.html.classList.remove("dark");
      this.themeIcon = "moon";
    } else {
      this._localStorage.set('theme', 'dark');
      this.html.classList.add("dark");
      this.themeIcon = "sun";
    }
  }
}
