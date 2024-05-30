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
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewTrailDetailComponent } from './components/view-trail-detail/view-trail-detail.component';

import { HikerMapDialogComponent } from './components/hiker-map-dialog/hiker-map-dialog.component';
// import { NgxPaginationModule } from 'ngx-pagination/lib/ngx-pagination.module';


@NgModule({
  declarations: [
    HikerComponent,
    DashboardComponent,
    DemandComponent,
    PlaceBookComponent,
    MyBookingsComponent,
    ViewBookedTrailsComponent,
    ReviewBookedTrailComponent,
    ViewTrailDetailComponent,
    HikerMapDialogComponent
  ],
  imports: [
    CommonModule,
    HikerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoAngularMaterailModule,
    NgxPaginationModule
    // NgxPaginationModule
  ]
})
export class HikerModule { }
