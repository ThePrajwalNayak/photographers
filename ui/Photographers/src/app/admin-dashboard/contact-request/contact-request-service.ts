import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactRequestService {

    BASE_URL = environment.baseUrl; 

    constructor(private http: HttpClient) { }

    getUnreadContactRequest() {
        return this.http.get(this.BASE_URL + "/admin/contactRequestByStatus", {
            params: {
                status: 'N'
            }
        });
    }

    approveContactRequest(contactRequestArray){
        return this.http.post(this.BASE_URL + "/admin/approveContactRequest", contactRequestArray );
    }


}
