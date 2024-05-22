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
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { ViewBookedTrailsComponent } from './components/view-booked-trails/view-booked-trails.component';
import { ReviewBookedTrailComponent } from './components/review-booked-trail/review-booked-trail.component';


@NgModule({
  declarations: [
    HikerComponent,
    DashboardComponent,
    DemandComponent,
    PlaceBookComponent,
    MyBookingsComponent,
    ViewBookedTrailsComponent,
    ReviewBookedTrailComponent
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
