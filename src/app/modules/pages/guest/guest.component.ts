import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { CoursesSectionComponent } from "./home/components/courses-section/courses-section.component";
import { CourseListComponent } from "../courses/pages/course-list/course-list.component";

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, CourseListComponent],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss'
})
export class GuestComponent {

}
