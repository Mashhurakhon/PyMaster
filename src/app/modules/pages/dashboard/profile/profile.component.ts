import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AuthComponent } from "../../auth/auth.component";
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private dataservice = inject(DataService)
  public getCourses() {   
    this.dataservice.getData().subscribe(data => console.log(data));
  }
}
