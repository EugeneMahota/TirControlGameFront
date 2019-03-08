import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  listGame: any[] = [];
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.listGame = this.dataService.getListData();
  }

}
