import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-list-active-game',
  templateUrl: './list-active-game.component.html',
  styleUrls: ['./list-active-game.component.scss']
})
export class ListActiveGameComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // let $counter;
    // $counter = interval(1000).pipe(map(x => {
    //   console.log(x);
    // })).pipe(map(x => {
    //   console.log('hi');
    // }));
    //
    // $counter.subscribe(res => {
    //   console.log(res);
    // });
  }

}
