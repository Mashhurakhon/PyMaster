import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup;

  private _fb = inject(FormBuilder);

  ngOnInit(): void {
    this._init();
  }
  private _init(): void {
    this.loginForm = this._fb.group({
      email:["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  public onSubmit() {
    console.log(this.loginForm.value);
  }
}
