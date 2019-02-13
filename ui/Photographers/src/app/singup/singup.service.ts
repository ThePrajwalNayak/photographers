import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

    BASE_URL = "http://pickphotographersapi.tk/api";
    // ÷BASE_URL = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }

  createAccount(req){
    return this.http.post(this.BASE_URL + "/photographers", req);
  }

}
