import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurModulesComponent } from './our-modules.component';

const routes: Routes = [{ path: '', component: OurModulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurModulesRoutingModule { }
