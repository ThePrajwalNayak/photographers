import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactRequestComponent } from './contact-request/contact-request.component';
import { NewPhotographerRequestComponent } from './new-photographer-request/new-photographer-request.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'contactRequest',
        component: ContactRequestComponent
      },
      {
        path: 'newPhotographerRequest',
        component: NewPhotographerRequestComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
