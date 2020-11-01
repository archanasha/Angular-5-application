import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UIService } from 'src/app/shared/ui-service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  trainings: Exercise[];
  trainingsSubscription: Subscription[] = [];
  isLoading = false;

  constructor(private exerciseService: ExerciseService,
    private uiService: UIService) { }


  ngOnInit(): void {
    this.trainingsSubscription.push(this.uiService.loadingStatusChanged.subscribe(loading => {
      this.isLoading = loading;
    }));
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
