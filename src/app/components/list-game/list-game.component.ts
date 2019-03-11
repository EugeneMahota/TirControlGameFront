import {Component, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {GameService} from '../../services/game.service';
import {ActiveGameService} from '../../services/active-game.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss'],
  animations: [
    trigger('list-game', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void=>*, *=>void', animate('200ms ease-in-out'))
    ])
  ]
})
export class ListGameComponent implements OnInit {

  itemGame: Game = new Game();
  listGame: any[] = [];

  constructor(private dataService: GameService, private activeGame: ActiveGameService) {
  }

  ngOnInit() {
    this.listGame = this.dataService.getListData();
  }
}
