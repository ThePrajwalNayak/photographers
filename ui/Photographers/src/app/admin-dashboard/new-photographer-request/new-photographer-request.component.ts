import { Component, OnInit } from '@angular/core';

import { NewPhotographerRequestService } from './new-photographer-request.service';

@Component({
  selector: 'app-new-photographer-request',
  templateUrl: './new-photographer-request.component.html',
  styleUrls: ['./new-photographer-request.component.scss']
})
export class NewPhotographerRequestComponent implements OnInit {

  photographers: any = [];
  selectedPhotographer: any;

  constructor(private newPhotographerRequestService: NewPhotographerRequestService) { }

  ngOnInit() {
    this.getNewPhotographerRequest();
  }

  getNewPhotographerRequest() {
    this.newPhotographerRequestService.getUnApprovedPhotographersRequest()
      .subscribe(data => {
        this.photographers = data;
        this.selectedPhotographer = this.photographers[0];
      }, error => {
        console.log(error);
      })
  }

  setPhotographer(photographer) {
    this.selectedPhotographer = photographer;
  }

}
