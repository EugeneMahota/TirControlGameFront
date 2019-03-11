import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './controllers/menu/menu.component';
import {LoginComponent} from './controllers/login/login.component';
import {SettingsGameComponent} from './components/settings-game/settings-game.component';
import {ListGameComponent} from './components/list-game/list-game.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},

  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent, children:[
      {path: 'game', component: ListGameComponent},
      {path: 'game/:id', component: SettingsGameComponent}
    ]}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
