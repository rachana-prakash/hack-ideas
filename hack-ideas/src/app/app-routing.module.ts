import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const mainRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
