import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseService } from '../exercise.service';
import { DialogComponent } from './../../shared/dialog.component';

@Component({
  selector: 'app-live-training',
  templateUrl: './live-training.component.html',
  styleUrls: ['./live-training.component.scss']
})
export class LiveTrainingComponent implements OnInit {

  progress = 0;
  timer;
  constructor(public dialog: MatDialog,
    private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.resumeTraining();
  }

  resumeTraining() {
    const step = this.exerciseService.getRunningExercise().duration / 100 * 1000
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.exerciseService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  stopProgress() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.exerciseService.cancelExercise(this.progress);
      } else {
        this.resumeTraining();
      }
    })
  }

}
