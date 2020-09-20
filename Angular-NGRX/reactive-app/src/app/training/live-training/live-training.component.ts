import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-training',
  templateUrl: './live-training.component.html',
  styleUrls: ['./live-training.component.scss']
})
export class LiveTrainingComponent implements OnInit {

  progress = 0;
  timer: number;
  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress = this.progress + 10;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  stopProgress() {
    clearInterval(this.timer);

  }

}
