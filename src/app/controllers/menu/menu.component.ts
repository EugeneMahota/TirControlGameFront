import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {ActiveGameService} from '../../services/active-game.service';
import {Game} from '../../models/game';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }


}
