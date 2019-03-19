import {Component, OnInit} from '@angular/core';
import {ActiveGameService} from '../../services/active-game.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Game} from '../../models/game';

@Component({
  selector: 'app-list-active-game',
  templateUrl: './list-active-game.component.html',
  styleUrls: ['./list-active-game.component.scss'],
  animations: [
    trigger('game', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.5)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void=>*,*=>void', animate('300ms ease-in-out'))
    ])
  ]
})
export class ListActiveGameComponent implements OnInit {

  itemGame: Game = new Game();
  listActiveGame: any[] = [];

  constructor(private activeGameService: ActiveGameService) {
    this.activeGameService.onListGame.subscribe(res => {this.listActiveGame = res});
  }

  ngOnInit() {
  }

  finishGame(game) {
    this.activeGameService.deleteGame(game);
  }

  deleteGame() {
    this.finishGame(this.itemGame);
  }

}
