import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotographersService {

  BASE_URL = environment.baseUrl;
  
  constructor(private http:HttpClient) { }

    getAllPhotographers() {
        return this.http.get(this.BASE_URL + '/photographers');
    }

     getAllPhotographersById(id) {
        return this.http.get(this.BASE_URL + '/photographers/'+id);
    }



}
