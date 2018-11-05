import { Injectable } from '@angular/core';
import { UserRegistrationModel } from '../models/UserRegistrationModel';
import {apiwrapper} from '../apis/apiwrapper';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {CacheService} from '../services/cache.service';

@Injectable()
export class UserService {  

  constructor(private apiwrapper:apiwrapper, private cacheService:CacheService) { 

  }  
  
  createUser(data){
    return this.apiwrapper.createUser(data);
  }

  loginUser(data){
    return Observable.create((observer) =>{
      this.apiwrapper.loginUser(data).subscribe(
        res => {
          this.cacheService.setup(true, res.token, res.timeToLive, res.id, data.username, data.password);
          observer.next(res);
          observer.completed();
        },
        error => {
          observer.error(error);
        },
        () => {});  
    });    
  }

  resetpassword(username){
    return this.apiwrapper.resetPassword(username);
  }
}
