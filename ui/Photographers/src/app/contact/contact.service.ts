import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createContact(req) {
    return this.http.post(this.BASE_URL + "/contacts", req);
  }
}
