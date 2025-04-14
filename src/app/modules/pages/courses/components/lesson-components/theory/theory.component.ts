import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theory',
  standalone: true,
  imports: [],
  templateUrl: './theory.component.html',
  styleUrl: './theory.component.scss'
})
export class TheoryComponent {
  @Input({required: true}) content: string = '';
}
