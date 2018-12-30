import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';
import { ExploreComponent } from './explore/explore.component';
import { ContactComponent } from './contact/contact.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'photographers', component: PhotographersComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'contact', component: ContactComponent },
  { path : 'signup', component : SingupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
