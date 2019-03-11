import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './controllers/menu/menu.component';
import {RouterModule} from '@angular/router';
import {ListActiveGameComponent} from './components/list-active-game/list-active-game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './controllers/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CountdownModule} from 'ngx-countdown';
import { SettingsGameComponent } from './components/settings-game/settings-game.component';
import { ListGameComponent } from './components/list-game/list-game.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListActiveGameComponent,
    FooterComponent,
    LoginComponent,
    SettingsGameComponent,
    ListGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
