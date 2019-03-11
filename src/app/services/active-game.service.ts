import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveGameService {


  listActiveGame: any[] = [];
  constructor() { }


  getGame() {
    return this.listActiveGame;
  }

  deleteGame(delete_game) {
    this.listActiveGame = this.listActiveGame.filter(game => game !== delete_game);
  }

  pushGame(game) {
    this.listActiveGame.push(game);
  }


}
