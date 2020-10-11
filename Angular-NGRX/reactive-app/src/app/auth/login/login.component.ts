import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', { validators: [Validators.required, Validators.email] }),
      password: this.formBuilder.control('', { validators: [Validators.required] })
    })
  }

  onSubmit() {
    this.authService.registerUser({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })
  }

}
