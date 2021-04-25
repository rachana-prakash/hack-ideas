import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddChallengeComponent} from './add-challenge.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddChallengeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'add-challenge',
      component: AddChallengeComponent,
      outlet: 'popup'
    }])
  ]
})
export class AddChallengeModule {
}
