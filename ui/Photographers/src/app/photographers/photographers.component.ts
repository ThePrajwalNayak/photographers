import { Component, OnInit } from '@angular/core';
import { PhotographersService } from '../photographers.service';

@Component({
  selector: 'app-photographers',
  templateUrl: './photographers.component.html',
  styleUrls: ['./photographers.component.scss']
})
export class PhotographersComponent implements OnInit {

  constructor(private photographersService : PhotographersService) { }

  ngOnInit() {
    this.loadAllPhotographers();
  }

  loadAllPhotographers(){
    this.photographersService.getAllPhotographers()
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
