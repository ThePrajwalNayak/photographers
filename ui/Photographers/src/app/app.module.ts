import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { PhotographersDeatilsComponent } from './photographers-deatils/photographers-deatils.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotographersComponent,
    PhotographersDeatilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
