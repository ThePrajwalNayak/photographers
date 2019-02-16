import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  BASE_URL = "http://pickphotographersapi.tk/api";
  // BASE_URL = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  createContact(req) {
    return this.http.post(this.BASE_URL + "/contacts", req);
  }
}
