import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AuthComponent } from "../../auth/auth.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonComponent, AuthComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
