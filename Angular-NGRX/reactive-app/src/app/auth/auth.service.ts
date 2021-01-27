import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { UIService } from '../shared/ui-service';
import { ExerciseService } from '../training/exercise.service';
import { AuthData } from './auth-data.model';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    authChange = new Subject<boolean>();
    private isAuthrised = false;

    constructor(private router: Router,
        private angularFireAuth: AngularFireAuth,
        private excerciseService: ExerciseService,
        private uiService: UIService,
        private store: Store<fromRoot.State>
    ) { }

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
        this.store.dispatch(new UI.StartLoading());
        this.angularFireAuth.createUserWithEmailAndPassword(
            userData.email,
            userData.password).then(result => {
                this.store.dispatch(new UI.StopLoading());
            }).catch(error => {
                this.store.dispatch(new UI.StopLoading());
                this.uiService.showSnackBar(error.message, null, 3000)
            });
    }

    login(userData: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.angularFireAuth.signInWithEmailAndPassword(
            userData.email,
            userData.password).then(result => {
                this.store.dispatch(new UI.StopLoading());
            }).catch(error => {
                this.store.dispatch(new UI.StopLoading());
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