import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_ROUTES } from './auth-routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth.component';

export const AuthRoutes: Routes = [
  {
    path: AUTH_ROUTES.LOGIN,
    component: LoginComponent,
    title: 'Вход',
  },
  {
    path: AUTH_ROUTES.REGISTER,
    component: RegisterComponent,
    title: 'Регистрация',
  },
  {
    path: AUTH_ROUTES.RESET_PASSWORD,
    component: ResetPasswordComponent,
    title: 'Сброс пароля',
  },
];
@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
