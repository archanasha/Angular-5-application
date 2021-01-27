import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  trainings: Exercise[];
  trainingsSubscription: Subscription[] = [];
  isLoading$: Observable<boolean>;


  constructor(private exerciseService: ExerciseService,
    private store: Store<fromRoot.State>) { }


  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    this.trainingsSubscription.push(this.exerciseService.exercisesChanged.subscribe(excercises => {
      this.trainings = excercises
    }));
    this.fetchTrainings();
  }

  fetchTrainings() {
    this.exerciseService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.exerciseService.startRunningExercise(form.value.exercise)
  }

  ngOnDestroy(): void {
    if (this.trainingsSubscription && this.trainingsSubscription.length > 0) {
      this.trainingsSubscription.forEach(e => e.unsubscribe());
    }
  }
}
