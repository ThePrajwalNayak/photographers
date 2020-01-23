import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { NewPhotographerRequestService } from './new-photographer-request.service';

@Component({
  selector: 'app-new-photographer-request',
  templateUrl: './new-photographer-request.component.html',
  styleUrls: ['./new-photographer-request.component.scss']
})
export class NewPhotographerRequestComponent implements OnInit {

  photographers: any = [];
  selectedPhotographer: any;

  constructor(private newPhotographerRequestService: NewPhotographerRequestService, private toastrService : ToastrService) { }

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

  approvePhotographersRequest(newPhotographer){
    newPhotographer.isApproved = 'Y';
    this.newPhotographerRequestService.approvePhotographersRequest(newPhotographer)
    .subscribe((data : any) => {
      var approveResponse = data;
      if(data.isApproved == 'Y'){
        this.toastrService.success(newPhotographer.userName +' Apporved', '', {
          disableTimeOut: true
        });
        this.refreshApprovedContactRequest(newPhotographer);
      }
    }, error => {
      console.log(error);
    });
  }

  deletePhotographersRequest(newPhotographer){
    this.newPhotographerRequestService.deletePhotographersRequest(newPhotographer.photographersId)
    .subscribe(data => {
        var deleteResponse = data;
        this.refreshApprovedContactRequest(newPhotographer);
    }, error => {
      console.log(error);
    });
  }

  refreshApprovedContactRequest(newPhotographer) {
    this.photographers.splice(this.photographers.indexOf(newPhotographer), 1);
    this.selectedPhotographer = this.photographers[0];
  }

}
