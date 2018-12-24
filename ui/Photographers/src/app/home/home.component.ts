import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoCards: any;
  imageCards : any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
   this.initVideoCard();
   this.initImageCard();
  }

  initVideoCard() {
    this.homeService.getAllVideos()
      .subscribe(data => {
        this.videoCards = data;
      }, err => {
        console.log(err);
      });
  }

  initImageCard(){
    this.homeService.getAllImages()
    .subscribe( data => {
      this.imageCards = data;
    }, err => {
      console.log(err);
    });
  }

}
