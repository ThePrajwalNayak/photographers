import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoCards: any;
  imageCards: any;
  photographers: any;

  constructor(private homeService: HomeService,
  private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.initVideoCard();
    this.initImageCard();
    this.initPhotographers();
  }

  initVideoCard() {
    this.homeService.getAllVideos()
      .subscribe(data => {
        this.videoCards = data;
      }, err => {
        console.log(err);
      });
  }

  initImageCard() {
    this.homeService.getAllImages()
      .subscribe(data => {
        this.imageCards = data;
      }, err => {
        console.log(err);
      });
  }

  initPhotographers() {
    this.spinnerService.show();
    this.homeService.getAllPhotographers()
      .subscribe(data => {
        this.photographers = data;
        if (this.photographers && this.photographers.length > 5) {
          this.photographers = this.photographers.slice(0, 5);
        }
        this.spinnerService.hide();
      }, err => {
        console.log(err);
      });
  }
}
