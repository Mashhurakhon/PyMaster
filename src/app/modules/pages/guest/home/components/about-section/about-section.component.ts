import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../shared/components/button/button.component";

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

}
