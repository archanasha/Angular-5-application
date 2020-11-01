import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit, AfterViewInit, OnDestroy {

  dataSource = new MatTableDataSource<Exercise>();
  finisedSubscription: Subscription;

  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private exerciseService: ExerciseService) {
    this.displayedColumns = ['date', 'name', 'duration', 'calories', 'state']
  }

  ngOnInit(): void {
    this.finisedSubscription = this.exerciseService.finishedExercisesChanged.subscribe((excercise: Exercise[]) => {
      this.dataSource.data = excercise;
    });
    this.exerciseService.fetchCompletedOrCancelledExercises();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterText: string) {
    this.dataSource.filter = filterText.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    if (this.finisedSubscription) {
      this.finisedSubscription.unsubscribe();
    }
  }

}
