import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UIService } from '../shared/ui-service';
import { ExerciseService } from '../training/exercise.service';
import { AuthData } from './auth-data.model';
import { User } from './user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    authChange = new Subject<boolean>();
    private isAuthrised = false;

    constructor(private router: Router,
        private angularFireAuth: AngularFireAuth,
        private excerciseService: ExerciseService,
        private uiService: UIService) { }

    isAuthListner() {
        this.angularFireAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthrised = true;
                this.authChange.next(true);
                this.router.navigate(['/training'])
            } else {
                this.excerciseService.cancelSubscriptions();
                this.isAuthrised = false;
                this.authChange.next(false);
                this.router.navigate(['/login'])
            }
        })
    }

    registerUser(userData: AuthData) {
        this.uiService.loadingStatusChanged.next(true);
        this.angularFireAuth.createUserWithEmailAndPassword(
            userData.email,
            userData.password).then(result => {
                this.uiService.loadingStatusChanged.next(false);
            }).catch(error => {
                this.uiService.loadingStatusChanged.next(false);
                this.uiService.showSnackBar(error.message, null, 3000)
            });
    }

    login(userData: AuthData) {
        this.uiService.loadingStatusChanged.next(true);
        this.angularFireAuth.signInWithEmailAndPassword(
            userData.email,
            userData.password).then(result => {
                this.uiService.loadingStatusChanged.next(false);
            }).catch(error => {
                this.uiService.loadingStatusChanged.next(false);
                this.uiService.showSnackBar(error.message, null, 3000)
            });
    }

    logout() {
        this.angularFireAuth.signOut();
    }

    isAuth() {
        return this.isAuthrised;
    }
}