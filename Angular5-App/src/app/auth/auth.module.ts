import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingMoudle } from './auth-routing.module';


@NgModule ({
    declarations: [
        LoginComponent,
        SignUpComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingMoudle
    ],
    exports: [
    ],
})
export class AuthModule {}
