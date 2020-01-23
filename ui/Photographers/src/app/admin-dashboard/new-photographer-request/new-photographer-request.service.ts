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
        return this.http.get(this.BASE_URL + "/admin/newPotogrpahers", {
            params: {
                status: 'N'
            }
        });
    }

    approvePhotographersRequest(photographersRequestArray){
        return this.http.post(this.BASE_URL + "/admin/approvePhotographersRequest", photographersRequestArray);
    }


}
