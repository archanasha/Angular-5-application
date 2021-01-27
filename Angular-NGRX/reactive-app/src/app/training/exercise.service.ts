import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UIService } from '../shared/ui-service';
import { Exercise } from './exercise.model';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';

@Injectable({
    providedIn: 'root',
})
export class ExerciseService {

    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    finishedExercisesChanged = new Subject<Exercise[]>();
    private subscriptions: Subscription[] = [];

    private availableExercises: Exercise[] = [];
    private runningExercise: Exercise;

    constructor(private angularFirestore: AngularFirestore,
        private uiService: UIService,
        private store: Store<fromRoot.State>) { }

    fetchAvailableExercises() {
        this.store.dispatch(new UI.StartLoading());
        this.subscriptions.push(this.angularFirestore.collection('availableExercises').snapshotChanges().pipe(
            map(docArray => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        name: doc.payload.doc.data()['name'],
                        calories: doc.payload.doc.data()['calories'],
                        duration: doc.payload.doc.data()['duration'],
                    } as Exercise;
                })
            })).subscribe(excercises => {
                this.store.dispatch(new UI.StopLoading());
                this.availableExercises = excercises;
                this.exercisesChanged.next([...this.availableExercises]);
            }, error => {
                this.store.dispatch(new UI.StopLoading());
                this.exercisesChanged.next(null);
                this.uiService.showSnackBar('Excercies cannot loaded, Plese try again later!', null, 3000)
            }));
    }

    startRunningExercise(selectedId: string) {
        this.runningExercise = this.availableExercises.find(e => e.id === selectedId);
        this.exerciseChanged.next({ ...this.runningExercise });
    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }

    completeExercise() {
        this.addDataToDataBase({
            ...this.runningExercise,
            date: new Date(),
            state: 'completed'
        });
        console.log('arch:: ', this.addDataToDataBase);
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.addDataToDataBase({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.duration * (progress / 100),
            date: new Date(),
            state: 'cancelled'
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    fetchCompletedOrCancelledExercises() {
        this.store.dispatch(new UI.StartLoading());
        this.subscriptions.push(this.angularFirestore.collection('finishedExercises').
            valueChanges().
            subscribe((exerscises: Exercise[]) => {
                this.store.dispatch(new UI.StopLoading());
                this.finishedExercisesChanged.next(exerscises);
            }, error => {
                this.store.dispatch(new UI.StopLoading());
                this.uiService.showSnackBar('You not started your workout! Start now :-)', null, 3000)
            }));
    }

    cancelSubscriptions() {
        this.subscriptions.forEach(e => e.unsubscribe());
    }

    private addDataToDataBase(exercise: Exercise) {
        this.angularFirestore.collection('finishedExercises').add(exercise);
    }
}