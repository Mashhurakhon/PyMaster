import { Component, inject, OnInit } from '@angular/core';
import { DashboardComponent } from "./modules/pages/dashboard/dashboard.component";
import { LocalstorageService } from './core/services/localstorage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'PyMaster';

  public html = document.querySelector("html") as HTMLElement;
  private _localStorage = inject(LocalstorageService);
  
  ngOnInit(): void {
    if(this._localStorage.get("theme") == "dark") {
      this.html.classList.add("dark");
    }
  }
}
