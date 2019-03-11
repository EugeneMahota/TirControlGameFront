import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Game} from '../../models/game';
import {ActiveGameService} from '../../services/active-game.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-settings-game',
  templateUrl: './settings-game.component.html',
  styleUrls: ['./settings-game.component.scss'],
  animations: [
    trigger('page', [
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
export class SettingsGameComponent implements OnInit {

  id: number;
  itemGame: Game = new Game();

  constructor(private gameService: GameService, private route: ActivatedRoute, private activeGame: ActiveGameService, private router: Router) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.itemGame = this.gameService.getGame(this.id);
  }

  addGame() {
    this.activeGame.pushGame(this.itemGame);
    this.router.navigate(['menu', 'game']);
  }

}
