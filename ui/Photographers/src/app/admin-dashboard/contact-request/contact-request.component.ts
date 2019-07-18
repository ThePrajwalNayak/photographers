import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-request',
  templateUrl: './contact-request.component.html',
  styleUrls: ['./contact-request.component.scss']
})
export class ContactRequestComponent implements OnInit {

  BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getContactRequest();
  }

  getContactRequest() {
    this.http.get(this.BASE_URL + "/contacts")
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

}
