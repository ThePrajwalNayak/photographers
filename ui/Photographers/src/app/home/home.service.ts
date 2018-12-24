import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getAllVideos(){
    return this.http.get("../../assets/json/video.json");
  }

  getAllImages(){
    return this.http.get("../../assets/json/image.json");
  }
}
