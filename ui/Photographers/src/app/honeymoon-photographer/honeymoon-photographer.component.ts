import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honeymoon-photographer',
  templateUrl: './honeymoon-photographer.component.html',
  styleUrls: ['./honeymoon-photographer.component.scss']
})
export class HoneymoonPhotographerComponent implements OnInit {
  
   window: any;
  constructor() { }


  ngOnInit() {

     if (window['FB']) {
        window['FB'].XFBML.parse();
    }
  }

}
