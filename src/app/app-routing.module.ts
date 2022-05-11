import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'ourModules', loadChildren: () => import('./pages/our-modules/our-modules.module').then(m => m.OurModulesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
