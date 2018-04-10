import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingMoudle { }
