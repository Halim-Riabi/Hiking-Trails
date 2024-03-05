import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HikerComponent } from './hiker.component';

const routes: Routes = [{ path: '', component: HikerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikerRoutingModule { }
