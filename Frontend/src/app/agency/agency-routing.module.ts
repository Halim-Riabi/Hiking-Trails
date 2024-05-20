import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: AgencyComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'category', component:  },
  // { path: 'trail', component:  },
  // { path: 'trail/:trailId', component:  },
  // { path: 'bookings', component:  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
