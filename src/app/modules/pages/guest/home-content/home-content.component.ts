import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {

}
