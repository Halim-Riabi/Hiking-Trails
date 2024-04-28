import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path : "login", component: LoginComponent},
  { path : "signup", component: SignupComponent},
  { path: 'hiker', loadChildren: () => import('./hiker/hiker.module').then(m => m.HikerModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'visitor', loadChildren: () => import('./visitor/visitor.module').then(m => m.VisitorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
