import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { User } from './user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    authChange = new Subject<boolean>();
    private user: User;

    constructor(private router: Router) { }

    registerUser(userData: AuthData) {
        this.user = {
            email: userData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
        this.router.navigate(['/training'])
    }

    login(userData: AuthData) {
        this.user = {
            email: userData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
        this.router.navigate(['/training'])

    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login'])

    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user !== null;
    }
}