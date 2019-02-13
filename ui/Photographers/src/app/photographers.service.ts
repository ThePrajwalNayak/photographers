import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotographersService {

BASE_URL = "http://pickphotographersapi.tk/api";
  // BASE_URL = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

    getAllPhotographers() {
        return this.http.get(this.BASE_URL + '/photographers');
    }

     getAllPhotographersById(id) {
        return this.http.get(this.BASE_URL + '/photographers/'+id);
    }



}
