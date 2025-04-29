import { booleanAttribute, Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonColor = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'link';

export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: ButtonType;
  @Input() color: ButtonColor;
  @Input() size: ButtonSize;
  @Input({ transform: booleanAttribute }) disabled: boolean;
  @Input({ transform: booleanAttribute}) isLoading: boolean = false;
  @Input() btnClass: string = ""

  constructor() {
    this.type = 'button';
    this.color = 'primary';
    this.size ='medium';
    this.disabled = false;
  }
}
