import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';
import { ExploreComponent } from './explore/explore.component';
import { ContactComponent } from './contact/contact.component';
import { SingupComponent } from './singup/singup.component';
import { HoneymoonPhotographerComponent } from './honeymoon-photographer/honeymoon-photographer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'photographers', component: PhotographersComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'contact', component: ContactComponent },
  { path : 'signup', component : SingupComponent},
  { path : 'login', component : LoginComponent},
  { path : 'honeymoonPhotographer', component : HoneymoonPhotographerComponent},
  {
	   path: 'admin',
     loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardModule'
	}
  // { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
