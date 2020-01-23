import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { environment } from '../../../environments/environment';
import { ContactRequestService } from './contact-request.service';

@Component({
  selector: 'app-contact-request',
  templateUrl: './contact-request.component.html',
  styleUrls: ['./contact-request.component.scss']
})
export class ContactRequestComponent implements OnInit {

  newContactRequests : any = [];

  constructor(private toastrService : ToastrService, private contactRequestService : ContactRequestService) { }

  ngOnInit() {
    this.getContactRequest();
  }

  getContactRequest() {
      this.contactRequestService.getUnreadContactRequest()
      .subscribe((data : any) => {
        this.newContactRequests = data;
        this.newContactRequests.forEach(element => {
          element.checked = false;
        });;
      }, error => {
        console.log(error);
      });
  }

  approveContactRequest(){
    var updatedContactRequest = this.newContactRequests.filter( contactRequest => {
      return contactRequest.checked == true;
    });
    if(updatedContactRequest.length > 0){
      updatedContactRequest.forEach(element => {
        element.isRead = 'Y';
      });
      this.contactRequestService.approveContactRequest(updatedContactRequest)
        .subscribe((data : number) => {
          if(data > 0){
            this.refreshApprovedContactRequest(updatedContactRequest);
            this.toastrService.success('Apporved', '', {
              disableTimeOut: true
            });
          } else {
            this.toastrService.success('Try again', '', {
              disableTimeOut: true
            });
          }
        }, error => {
          console.log(error);
        });
    }else{
      this.toastrService.success('Plase select category request', '', {
        disableTimeOut: true
      });
    }
  }

  refreshApprovedContactRequest(updatedContactRequest) {
    updatedContactRequest.forEach(element => {
      this.newContactRequests.splice(this.newContactRequests.indexOf(element), 1);
    });
  }

}
