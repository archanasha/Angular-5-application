import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  @Output() startTraining = new EventEmitter<void>();
  trainings: any[] = [
    { value: 'crunches-0', viewValue: 'Crunches' },
    { value: 'lunges-1', viewValue: 'Lunges' },
    { value: 'squats-2', viewValue: 'Squats' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onStartTraining() {
    this.startTraining.emit();
  }
}
