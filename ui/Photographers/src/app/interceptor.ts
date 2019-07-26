import { Injectable } from '@angular/core';
import { 
  HttpEvent, HttpRequest, HttpHandler, 
  HttpInterceptor, HttpErrorResponse 
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private toasterService: ToastrService){

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // refresh token
        } else if(error.status === 500){
          this.toasterService.error('Internal Server Error', 'Please try after some time',{
            disableTimeOut:true
          });
        } 
        else {
          return throwError(error);
        }
      })
    );    
  }
}