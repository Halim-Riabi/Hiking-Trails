import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';


@NgModule({
  declarations: [
    AgencyComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule
  ]
})
export class AgencyModule { }
