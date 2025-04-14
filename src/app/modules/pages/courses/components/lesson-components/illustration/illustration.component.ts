import { Component, Input } from '@angular/core';

export interface IllustrationInterface {
  image: string;
  description: string
}
@Component({
  selector: 'app-illustration',
  standalone: true,
  imports: [],
  templateUrl: './illustration.component.html',
  styleUrl: './illustration.component.scss'
})
export class IllustrationComponent {
  @Input() data: IllustrationInterface = {
    image: '',
    description: ''
  } 
}
