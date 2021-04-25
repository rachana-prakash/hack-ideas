import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../guards/auth/auth.guard';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent, canActivate: [AuthGuard]}])
  ]
})
export class HomeModule {
}
