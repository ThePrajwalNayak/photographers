import { Component, OnInit } from '@angular/core';

import { ImageService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  imageCards: any;
  constructor(private homeService: ImageService) { }

  ngOnInit() {
    this.initImageCard();
  }

  initImageCard() {
    this.homeService.getAllImages()
      .subscribe(data => {
        this.imageCards = data;
      }, err => {
        console.log(err);
      });
  }

}
