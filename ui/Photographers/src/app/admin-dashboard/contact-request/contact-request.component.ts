import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-request',
  templateUrl: './contact-request.component.html',
  styleUrls: ['./contact-request.component.scss']
})
export class ContactRequestComponent implements OnInit {

  BASE_URL = environment.baseUrl;

  newContactRequests : any = [];

  constructor(private http: HttpClient, private toastrService : ToastrService) { }

  ngOnInit() {
    this.getContactRequest();
  }

  getContactRequest() {
    this.http.get(this.BASE_URL + "/admin/contactRequestByStatus",{
      params: {
        status: 'N'
      }})
      .subscribe(data => {
        this.newContactRequests = data;
      }, error => {
        console.log(error);
      })
  }

}
