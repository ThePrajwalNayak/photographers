import { Component, OnInit } from '@angular/core';

import { PhotographersService } from '../photographers.service';

@Component({
  selector: 'app-photographers',
  templateUrl: './photographers.component.html',
  styleUrls: ['./photographers.component.scss']
})
export class PhotographersComponent implements OnInit {

  photographers : any;
  selectedPhotographer : any;
  constructor(private photographersService : PhotographersService) { }

  ngOnInit() {
    if (localStorage.getItem('photographers')) {
      this.photographers = JSON.parse(localStorage.getItem('photographers'));
      this.selectedPhotographer = this.photographers[0];
    }
  }

  loadAllPhotographers(){
    this.photographersService.getAllPhotographers()
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  setPhotographer(photographer){
    this.selectedPhotographer = photographer;
  }

}
