import { Component, OnInit } from '@angular/core';

import { PhotographersService } from './photographers.service';

@Component({
  selector: 'app-photographers',
  templateUrl: './photographers.component.html',
  styleUrls: ['./photographers.component.scss']
})
export class PhotographersComponent implements OnInit {

  photographers: any;
  selectedPhotographer: any;
  constructor(private photographersService: PhotographersService) { }

  ngOnInit() {
    this.loadAllPhotographers();
  }

  loadAllPhotographers() {
    this.photographersService.getAllPhotographers()
      .subscribe(data => {
        console.log(data);
        this.photographers = data
        this.selectedPhotographer = this.photographers[0];
      }, err => {
        console.log(err);
      });
  }

  setPhotographer(photographer) {
    this.selectedPhotographer = photographer;
  }

  openLink(link) {
    if (link) {
      window.open(link, "_blank");
    }
  }
}
