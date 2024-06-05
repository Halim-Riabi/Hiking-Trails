import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostTrailComponent } from './components/post-trail/post-trail.component';
import { UpdateTrailComponent } from './components/update-trail/update-trail.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: AgencyComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'category', component:  },
  { path: 'trail', component: PostTrailComponent },
  { path: 'trail/:trailId', component: UpdateTrailComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
