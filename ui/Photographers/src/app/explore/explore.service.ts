import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ExploreService {

    BASE_URL = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getAllEvents() {
        return this.http.get("../../assets/json/event-component.json");
    }

}
