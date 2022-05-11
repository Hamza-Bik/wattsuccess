import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '',  loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)},
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./modules/layout/master/master.module').then(m => m.MasterModule) },
  {path: '**',redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
