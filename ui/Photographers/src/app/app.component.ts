import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isAdminUrl : boolean = true;
  // template: string =`<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`;

  constructor(location: Location, router: Router){
      router.events.subscribe((val) => {
         this.isAdminUrl = location.path().includes('/admin') ? true : false;
      });
  }

  backToTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
