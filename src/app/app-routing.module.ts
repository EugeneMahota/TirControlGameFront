import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './controllers/menu/menu.component';
import {LoginComponent} from './controllers/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},

  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent}

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
