import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { INDPLAYERS } from '../data/player-mock';
import { Player } from '../model/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnChanges {

  isAddTeamSelected = false;
  playerName: string;
  players = INDPLAYERS;
  @Input() playerChildTitle: string;
  @Output() numberOfplayers = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.numberOfplayers.emit(this.players.length);
  }

  onAddTeam() {
    let player: Player = {
      id: this.players.length + 1,
      name: this.playerName
    }
    this.players.push(player);
    this.numberOfplayers.emit(this.players.length);
  }

}
