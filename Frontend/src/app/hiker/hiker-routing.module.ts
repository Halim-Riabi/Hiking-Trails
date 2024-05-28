import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HikerComponent } from './hiker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemandComponent } from './components/demand/demand.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { ViewBookedTrailsComponent } from './components/view-booked-trails/view-booked-trails.component';
import { ReviewBookedTrailComponent } from './components/review-booked-trail/review-booked-trail.component';
import { ViewTrailDetailComponent } from './components/view-trail-detail/view-trail-detail.component';

const routes: Routes = [
  { path: '', component: HikerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'demand', component: DemandComponent },
  { path: 'my_bookings', component: MyBookingsComponent },
  { path: 'booked_trails/:bookId', component: ViewBookedTrailsComponent },
  { path: 'review/:trailId', component: ReviewBookedTrailComponent },
  { path: 'trail/:trailId', component: ViewTrailDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikerRoutingModule { }
