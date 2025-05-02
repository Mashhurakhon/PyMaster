import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  private _fb = inject(FormBuilder);

  ngOnInit(): void {
    this._init();
  }
  private _init(): void {
    this.registerForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[ Validators.required, Validators.minLength(8)]],
      terms: ['false', [Validators.required]],
    });
  }
  public onSubmit() {
    console.log(this.registerForm.value);
  }
}
