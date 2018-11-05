import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import * as apiconfig from './apiconfig';
import {ErrorModel} from '../models/ErrorModel';

@Injectable()
export class apiwrapper{    
    
    constructor(private http:HttpClient) {
        
    }    

    // This is for registration / create account
    // data : {firstName:'', lastName:'', dateOfBirth:'dd/MM/yyyy',email:'',username:'',password:''}
    // response: null
    createUser(data) {
        return this.http.post(apiconfig.createUserUrl, data).pipe(
            map(res=> res),
            catchError(this.handleError)
        );
    }
    
    // This is for login user
    // data : {username:'', password:''}
    // response : token
    loginUser(data){
        return this.http.post(apiconfig.loginUrl, data).pipe(
            map(res => res),
            catchError(this.handleError)
        );
    }

    //sends a reset password
    resetPassword(username){
        let url = apiconfig.resetPasswordUrl+username;
        return this.http.get(url).pipe(
            map(res => res),
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        let errorModel = new ErrorModel();
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
          errorModel.errorMessage = error.error.message;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
            errorModel.status = error.status;
            errorModel.errorMessage = error.error
        }
        // return an observable with a user-facing error message
        return Observable.throw(errorModel);
      };
}