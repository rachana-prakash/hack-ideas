import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddChallengeComponent} from './add-challenge.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [AddChallengeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'add-challenge',
      component: AddChallengeComponent,
      outlet: 'popup'
    }])
  ]
})
export class AddChallengeModule {
}
