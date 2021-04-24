import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponentModule} from './components/main-component.module';
import {AddChallengeModule} from './modals/add-challenge/add-challenge.module';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MainComponentModule,
    AddChallengeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
