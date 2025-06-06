import { Component, inject, OnInit } from '@angular/core';
import { LocalstorageService } from './core/services/localstorage.service';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from "./modules/pages/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'PyMaster';

  public html = document.querySelector("html") as HTMLElement;
  private _localStorage = inject(LocalstorageService);
  private _router = inject(Router);
  ngOnInit(): void {
    if(this._localStorage.get("theme") == "dark") {
      this.html.classList.add("dark");
    }

    if(this._localStorage.get("token")) {
      this._router.navigate(['/dashboard']);
    }
  }
}
