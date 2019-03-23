import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    BASE_URL = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getAllImages() {
        return this.http.get("../../assets/json/image-component.json");
    }

}
