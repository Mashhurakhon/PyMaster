import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { LocalstorageService } from '../../../../core/services/localstorage.service';

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
  private _localStorage = inject(LocalstorageService);
  private _router = inject(Router);
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
    const role = "user";

    this._localStorage.set("accessToken", "token");
    this._localStorage.set("role", role);
    this._router.navigate(['/dashboard']);    
  }
}
