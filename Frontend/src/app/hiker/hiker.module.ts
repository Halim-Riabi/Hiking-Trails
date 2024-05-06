import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikerRoutingModule } from './hiker-routing.module';
import { HikerComponent } from './hiker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { DemandComponent } from './components/demand/demand.component';
import { PlaceBookComponent } from './components/place-book/place-book.component';


@NgModule({
  declarations: [
    HikerComponent,
    DashboardComponent,
    DemandComponent,
    PlaceBookComponent
  ],
  imports: [
    CommonModule,
    HikerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoAngularMaterailModule
  ]
})
export class HikerModule { }
