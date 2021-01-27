import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  subscription: Subscription;
  isLoading$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private store: Store<fromRoot.State>) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', { validators: [Validators.required, Validators.email] }),
      password: this.formBuilder.control('', { validators: [Validators.required] })
    });
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })
  }

}
