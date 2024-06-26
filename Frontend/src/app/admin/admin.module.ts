import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostTrailComponent } from './components/post-trail/post-trail.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { UpdateTrailComponent } from './components/update-trail/update-trail.component';
import { MapDialogComponent } from './components/map-dialog/map-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostCategoryComponent,
    PostTrailComponent,
    DeleteConfirmationDialogComponent,
    BookingsComponent,
    UpdateTrailComponent,
    MapDialogComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoAngularMaterailModule
  ]
})
export class AdminModule { }
