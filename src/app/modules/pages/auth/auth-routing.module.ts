import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AUTH_ROUTES } from "./auth-routes";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AuthRoutes: Routes = [
    {
        path: AUTH_ROUTES.LOGIN,
        component: LoginComponent,
        title: "Вход"
    },
    {
        path: AUTH_ROUTES.REGISTER,
        component: RegisterComponent,
        title: "Регистрация"
    }
]
@NgModule({
    imports: [RouterModule.forChild(AuthRoutes)],
    exports: [RouterModule],
  })
  export class AuthRoutingModule {}