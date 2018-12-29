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
  photographers : any;

  constructor(private homeService: HomeService) { }

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

  initImageCard(){
    this.homeService.getAllImages()
    .subscribe( data => {
      this.imageCards = data;
    }, err => {
      console.log(err);
    });
  }

  initPhotographers(){
    if (localStorage.getItem('photographers')) {
      this.photographers = JSON.parse(localStorage.getItem('photographers'));
      if(this.photographers && this.photographers.length > 5){
        this.photographers = this.photographers.slice(0, 5);
      }
    } else {
      this.homeService.getAllPhotographers()
        .subscribe(data => {
          this.photographers = data;
                if(this.photographers && this.photographers.length > 5){
        this.photographers = this.photographers.slice(0, 5);
      }
          localStorage.setItem('photographers', JSON.stringify(data));
          console.log(this.photographers);
        }, err => {
          console.log(err);
        });
    }
  }
}
