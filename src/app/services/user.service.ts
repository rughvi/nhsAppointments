import { Injectable } from '@angular/core';
import { UserRegistrationModel } from '../models/UserRegistrationModel';
import {apiwrapper} from '../apis/apiwrapper';

@Injectable()
export class UserService {

  constructor(private apiwrapper:apiwrapper) { 

  } 

  isValid(){
    return false;
  }
  
  createUser(data){
    return this.apiwrapper.createUser(data);
  }
}
