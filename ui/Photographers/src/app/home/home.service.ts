import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  BASE_URL = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllVideos(){
    return this.http.get("../../assets/json/video.json");
  }

  getAllImages(){
    return this.http.get("../../assets/json/image.json");
  }

  getAllPhotographers(){
    return this.http.get(this.BASE_URL + "/photographers");
  }

}
