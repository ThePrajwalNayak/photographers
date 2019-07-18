import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactRequestComponent } from './contact-request/contact-request.component';

const routes: Routes = [
    { 
	  path: '',
          component: AdminDashboardComponent,
          children: [ 
	    {
	       path: 'contactRequest',
	       component: ContactRequestComponent
	    }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
