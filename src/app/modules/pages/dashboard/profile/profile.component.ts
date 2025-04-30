import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormFieldComponent } from '../../../../shared/components/form-field/form-field.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProfileInterface } from '../../../../core/models/profile.interface';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormFieldComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public profileForm!: FormGroup;
  public user$: Observable<ProfileInterface> = of({
    id: '1',
    firstName: 'Mashhurakhon',
    lastName: 'Alimukhamedova',
    login: 'Vfi[ehf[jy03',
    email: 'masha@info.com',
    role: 'user',
  });
  private _fb = inject(FormBuilder);
  ngOnInit(): void {
    this._init();
  }

  public _init() {
    this.profileForm = this._fb.group({
      login: [''],
      firstname: [''],
      lastname: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }
  public onSubmit() {}
}
