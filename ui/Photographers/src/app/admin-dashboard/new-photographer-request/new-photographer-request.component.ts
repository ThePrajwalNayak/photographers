import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-photographer-request',
  templateUrl: './new-photographer-request.component.html',
  styleUrls: ['./new-photographer-request.component.scss']
})
export class NewPhotographerRequestComponent implements OnInit {

  BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNewPhotographerRequest();
  }

  getNewPhotographerRequest() {
    this.http.get(this.BASE_URL + "/admin/newPhotographers")
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

}
