import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { PhotographersDeatilsComponent } from './photographers-deatils/photographers-deatils.component';

const routes: Routes = [
  { path: 'nav', component: NavigationComponent },
  { path: 'photographers', component: PhotographersComponent },
  { path: 'photographers/:id', component: PhotographersDeatilsComponent },
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  { path: '**', component: NavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
