import {Component, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {GameService} from '../../services/game.service';
import {ActiveGameService} from '../../services/active-game.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';

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

  listGame: Game[] = [];
  listActiveGame: Game[] = [];

  private notifier: NotifierService;

  constructor(private dataService: GameService, private activeGame: ActiveGameService, private router: Router, private route: ActivatedRoute, notifierService: NotifierService) {
    this.notifier = notifierService;
    this.activeGame.onListGame.subscribe(res => {
      this.listActiveGame = res;
    });
  }

  ngOnInit() {
    this.listActiveGame = this.activeGame.getGame();
    this.listGame = this.dataService.getListData();
  }

  onGame(id: number) {
    if (this.listActiveGame.find(x => x.id === id)) {
      this.notifier.notify('error', 'Игра уже запущенна!');
    } else {
      this.router.navigate([id], {relativeTo: this.route});
    }
  }
}
