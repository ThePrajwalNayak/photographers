import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  HOME : string = 'Home';
  PHOTOGRAPHERS : string = 'Photographers';
  VIDEOS : string = 'Videos';
  IMAGES : string = 'Images';
  EXPLORE : string = 'Explore';
  CONTACT : string = 'Contact';
  selectedNavMenu : string = this.HOME;
  currentUrl : string;

  constructor(location: Location, router: Router) {
       router.events.subscribe((val) => {
         this.currentUrl = location.path();
         if(this.currentUrl === '/home'){
           this.selectedNavMenu = this.HOME;
         }else  if(this.currentUrl === '/photographers'){
           this.selectedNavMenu = this.PHOTOGRAPHERS;
         }else  if(this.currentUrl === '/videos'){
           this.selectedNavMenu = this.VIDEOS;
         }else  if(this.currentUrl === '/images'){
           this.selectedNavMenu = this.IMAGES;
         }else  if(this.currentUrl === '/explore'){
           this.selectedNavMenu = this.EXPLORE;
         }else if(this.currentUrl === '/contact'){
           this.selectedNavMenu = this.CONTACT;
         }
         console.log(this.currentUrl);
    });
   }

  ngOnInit() {
  }

  setSelectedNavMenu(path : string){
    this.selectedNavMenu = path;
  }



}
