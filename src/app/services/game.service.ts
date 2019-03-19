import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  listGame: any[] = [
    {
      id: 1,
      image: 'https://us.123rf.com/450wm/infadel/infadel1611/infadel161100017/68717817-drone-icon-with-camera-lens-concept-of-smart-hobbie-toy-action-camera-drone-shoot-snapshot-videograp.jpg?ver=6',
      name: 'Игра на сувенир',
      shot: 6,
      miss: 4,
      time: 120
    },
    {
      id: 2,
      image: 'https://icons-for-free.com/free-icons/png/512/1936908.png',
      name: 'Игра на выживание',
      shot: 6,
      miss: 4,
      time: 20
    },
    {
      id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Toicon-icon-fandom-game.svg/2000px-Toicon-icon-fandom-game.svg.png',
      name: 'Игра на деньги',
      shot: 6,
      miss: 4,
      time: 25
    },
    {
      id: 4,
      image: 'data:image/png;base64,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',
      name: 'Игра на почку',
      shot: 6,
      miss: 4,
      time: 15
    },
    {
      id: 5,
      image: 'https://images.mysecuritysign.com/img/lg/K/rifle-range-symbol-sign-k2-0547.png',
      name: 'Игра на печеньки',
      shot: 6,
      miss: 4,
      time: 15
    },
    {
      id: 6,
      image: 'https://previews.123rf.com/images/kearia/kearia1709/kearia170900243/85546347-fire-icon.jpg',
      name: 'Игра на негров',
      shot: 6,
      miss: 4,
      time: 15
    },
    {
      id: 7,
      image: 'https://www.awicons.com/free-icons/download/internet-icons/emotions-2-icons-by-kirozeng/ico/fire.ico',
      name: 'Игра на нервах',
      shot: 6,
      miss: 4,
      time: 15
    },
    {
      id: 8,
      image: 'https://cdn3.iconfinder.com/data/icons/easter-flat-multicolor-background-shadow/2048/904_-_Gift_I-512.png',
      name: 'Игра на банджо',
      shot: 6,
      miss: 4,
      time: 15
    },
    {
      id: 9,
      image: 'http://pngimage.net/wp-content/uploads/2018/06/souvenir-icon-png-4.png',
      name: 'Игра на воображение',
      shot: 6,
      miss: 4,
      time: 15
    },
    {
      id: 10,
      image: 'http://www.collegium.kr.ua/img/study/5.png',
      name: 'Игра на еще что нибудь',
      shot: 6,
      miss: 4,
      time: 15
    },
    {
      id: 11,
      image: 'https://png.pngtree.com/png_detail/18/09/10/pngtree-toys-stereoscopic-image-icon-silhouette-png-clipart_395768.jpg',
      name: 'Игра на кости',
      shot: 6,
      miss: 4,
      time: 15
    },
    {
      id: 12,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt2Er43DeHBfdTo0X5oTZZj0ulHH6n5E3cqxwAtRAKJOieGEk',
      name: 'Игра на вжух',
      shot: 6,
      miss: 4,
      time: 15
    }
  ];

  constructor() {
  }


  getListData() {
    return this.listGame;
  }

  getGame(id: number) {
    return this.listGame.find(x => x.id === id);
  }
}
