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
         console.log(this.currentUrl);
    });
   }

  ngOnInit() {
    // this.selectedNavMenu = this.HOME;
  }

  setSelectedNavMenu(path : string){
    this.selectedNavMenu = path;
  }



}
