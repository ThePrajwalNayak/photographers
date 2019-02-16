import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  BASE_URL = environment.baseUrl;

  constructor(private http:HttpClient) { }

  createAccount(req){
    return this.http.post(this.BASE_URL + "/photographers", req);
  }

}
