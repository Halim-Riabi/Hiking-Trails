import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { AgencyMapDialogComponent } from './components/dashboard/agency-map-dialog/agency-map-dialog.component';
import { PostTrailComponent } from './components/post-trail/post-trail.component';
import { UpdateTrailComponent } from './components/update-trail/update-trail.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';


@NgModule({
  declarations: [
    AgencyComponent,
    DashboardComponent,
    AgencyMapDialogComponent,
    PostTrailComponent,
    UpdateTrailComponent,
    BookingsComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoAngularMaterailModule
  ]
})
export class AgencyModule { }
