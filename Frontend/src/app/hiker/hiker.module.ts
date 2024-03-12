import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikerRoutingModule } from './hiker-routing.module';
import { HikerComponent } from './hiker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    HikerComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HikerRoutingModule
  ]
})
export class HikerModule { }
