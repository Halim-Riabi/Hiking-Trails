import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikerRoutingModule } from './hiker-routing.module';
import { HikerComponent } from './hiker.component';


@NgModule({
  declarations: [
    HikerComponent
  ],
  imports: [
    CommonModule,
    HikerRoutingModule
  ]
})
export class HikerModule { }
