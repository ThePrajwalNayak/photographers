import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactRequestComponent } from './contact-request/contact-request.component';
import { NewPhotographerRequestComponent } from './new-photographer-request/new-photographer-request.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  declarations: [AdminDashboardComponent, ContactRequestComponent, NewPhotographerRequestComponent, LoginComponent]
})
export class AdminDashboardModule { }
//https://www.concretepage.com/angular-2/angular-2-4-child-routes-and-relative-navigation-example