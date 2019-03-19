import {EventEmitter, Injectable} from '@angular/core';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class ActiveGameService {


  onListGame: EventEmitter<Game[]> = new EventEmitter();
  listActiveGame: any[] = [];
  constructor() { }


  getGame() {
    return this.listActiveGame;
  }

  deleteGame(delete_game) {
    this.listActiveGame = this.listActiveGame.filter(game => game !== delete_game);
    this.onListGame.emit(this.listActiveGame);
  }

  pushGame(game) {
    this.listActiveGame.push(game);
    this.onListGame.emit(this.listActiveGame);
  }


}
