import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { StoriesComponent } from './stories/stories.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'photographers', component: PhotographersComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'explore', component: ExploreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
