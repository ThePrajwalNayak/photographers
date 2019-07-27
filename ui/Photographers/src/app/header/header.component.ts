import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Data } from './../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  HOME : string = 'Home';
  PHOTOGRAPHERS : string = 'Photographers';
  HONEYMOON_PHOTOGRAPGER : string = 'Honeymoon Photographer';
  IMAGES : string = 'Images';
  EXPLORE : string = 'Explore';
  CONTACT : string = 'Contact';
  selectedNavMenu : string = this.HOME;
  // selectedNavMenu : string;
  currentUrl : string;

  constructor(location: Location, private router: Router, private data : Data) {
       router.events.subscribe((val) => {
         this.currentUrl = location.path();
         if(this.currentUrl === '/home'){
           this.selectedNavMenu = this.HOME;
         }else  if(this.currentUrl === '/photographers'){
           this.selectedNavMenu = this.PHOTOGRAPHERS;
         }else  if(this.currentUrl === '/honeymoonPhotographer'){
           this.selectedNavMenu = this.HONEYMOON_PHOTOGRAPGER;
         }else  if(this.currentUrl === '/images'){
           this.selectedNavMenu = this.IMAGES;
         }else  if(this.currentUrl === '/explore'){
           this.selectedNavMenu = this.EXPLORE;
         }else if(this.currentUrl === '/contact'){
           this.selectedNavMenu = this.CONTACT;
         }
    });
   }

  ngOnInit() {
  }

  setSelectedNavMenu(path : string){
    this.selectedNavMenu = path;
  }

  goToSignup(){
    this.data.storage = null;
    this.router.navigateByUrl('/account');
  }

}
