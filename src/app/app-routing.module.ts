import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MenuComponent} from './components/menu/menu.component';
import {ListGameComponent} from './controllers/list-game/list-game.component';
import {SettingsGameComponent} from './controllers/settings-game/settings-game.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},

  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent, children:[
      {path: '', pathMatch: 'full', redirectTo: 'game'},
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
