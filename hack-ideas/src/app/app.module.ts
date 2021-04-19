import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponentModule} from './components/main-component.module';
import {LoginModule} from './main/login/login.module';
import {AddChallengeModule} from './modals/add-challenge/add-challenge.module';
import {HomeModule} from './main/home/home.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainComponentModule,
    LoginModule,
    AddChallengeModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
