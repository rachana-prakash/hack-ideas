import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const mainRoutes: Routes = [{
  path: 'login',
  loadChildren: () => import('./main/login/login.module').then(m => m.LoginModule)
},
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
