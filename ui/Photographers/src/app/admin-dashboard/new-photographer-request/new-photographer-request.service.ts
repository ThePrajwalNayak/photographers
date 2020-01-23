import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewPhotographerRequestService {

    BASE_URL = environment.baseUrl; 

    constructor(private http: HttpClient) { }

    getUnApprovedPhotographersRequest() {
        return this.http.get(this.BASE_URL + "/admin/newPotogrpahers");
    }

    approvePhotographersRequest(newPhotographer){
        return this.http.put(this.BASE_URL + "/admin/approvePhotographersRequest", newPhotographer);
    }

    deletePhotographersRequest(newPhotographerId){
        return this.http.delete(this.BASE_URL + "/admin/photographers/" + newPhotographerId);
    }

}
