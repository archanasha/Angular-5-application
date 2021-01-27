import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h2 {
  //     color: red;
  //   }
  // `]
})
export class AppComponent {

  interpolationTitle: string = 'Team';
  playerTitle: string = 'Criketer';
  count: number;

  countPlayers($event) {
    this.count = $event;
  }

}
