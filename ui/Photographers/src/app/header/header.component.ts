import { Component, OnInit } from '@angular/core';

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
  selectedNavMenu : string;

  constructor() { }

  ngOnInit() {
    this.selectedNavMenu = this.HOME;
  }

  setSelectedNavMenu(path : string){
    this.selectedNavMenu = path;
  }



}
