import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
