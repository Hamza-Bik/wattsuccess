import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurModulesRoutingModule } from './our-modules-routing.module';
import { OurModulesComponent } from './our-modules.component';


@NgModule({
  declarations: [
    OurModulesComponent
  ],
  imports: [
    CommonModule,
    OurModulesRoutingModule
  ]
})
export class OurModulesModule { }
