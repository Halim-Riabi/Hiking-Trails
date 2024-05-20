import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HikerComponent } from './hiker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemandComponent } from './components/demand/demand.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';

const routes: Routes = [
  { path: '', component: HikerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'demand', component: DemandComponent },
  { path: 'my_bookings', component: MyBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikerRoutingModule { }
