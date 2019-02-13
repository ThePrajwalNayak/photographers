import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  BASE_URL = "http://pickphotographersapi.tk/api";
  // BASE_URL = "http://localhost:3000/api";

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
