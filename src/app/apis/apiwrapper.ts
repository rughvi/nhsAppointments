import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable()
export class apiwrapper{
    
    
    constructor(private http:HttpClient) {

    }

    createUser(data) {
        return this.http.post(this.createUserUrl, data).pipe(
            map(res=> res),
            catchError(this.handleError));
        }

    private handleError(error: any) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Observable.throw(error.error || error.json() || error || 'Server error');
      };
}