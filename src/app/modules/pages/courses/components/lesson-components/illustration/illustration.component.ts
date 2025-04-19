import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-illustration',
  standalone: true,
  imports: [],
  templateUrl: './illustration.component.html',
  styleUrl: './illustration.component.scss',
})
export class IllustrationComponent {
  @Input({ required: true }) image: string = '';
  @Input() description: string = '';
}
