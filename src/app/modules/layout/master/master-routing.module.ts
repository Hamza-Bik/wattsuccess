import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';

const routes: Routes = [
  {
    path: '', component: MasterComponent,
    children: [
      { path: 'home', loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule) },
      { path: 'modules', loadChildren: () => import('../../pages/our-modules/our-modules.module').then(m => m.OurModulesModule) },

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
