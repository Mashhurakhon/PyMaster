import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input() label:string = "";
  @Input({ required: true }) type = "text";
  @Input() placeholder = "";
  @Input() value = "";
  @Input() validationMsg:string = "";
  @Input() control = "";
}

