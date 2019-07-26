import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
//Toaster start
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Toaster End

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotographersService } from './photographers/photographers.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { ExploreComponent } from './explore/explore.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { SingupComponent } from './singup/singup.component';
import { SingupService } from './singup/singup.service';
import { ContactService } from './contact/contact.service';
import { HoneymoonPhotographerService } from './honeymoon-photographer/honeymoon-photographer.service';
import { HoneymoonPhotographerComponent } from './honeymoon-photographer/honeymoon-photographer.component';
import {Interceptor} from './interceptor';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotographersComponent,
    HeaderComponent,
    HomeComponent,
    ExploreComponent,
    ImagesComponent,
    VideosComponent,
    ContactComponent,
    SingupComponent,
    HoneymoonPhotographerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule, 
    ToastrModule.forRoot() 
  ],
  providers: [PhotographersService, {provide: LocationStrategy, useClass: HashLocationStrategy}, SingupService, ContactService, HoneymoonPhotographerService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
