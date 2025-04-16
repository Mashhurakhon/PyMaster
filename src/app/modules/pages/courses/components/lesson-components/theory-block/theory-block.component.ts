import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theory-block',
  standalone: true,
  imports: [],
  templateUrl: './theory-block.component.html',
  styleUrl: './theory-block.component.scss',
})
export class TheoryBlockComponent {
  @Input({ required: true }) data: string =
    '<block><p>Текст теории по теме</p></block>';
}
