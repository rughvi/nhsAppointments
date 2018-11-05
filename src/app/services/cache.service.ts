import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  private static _currentUser = {
    id:'',
    username:'',
    password:''
  };
  private static _authenticationToken = '';
  private static _isUserLoggedOn = false;
  private static _timeToLive = 3600;

  constructor() { }

  isUserLoggedOn(){
    return CacheService._isUserLoggedOn;
  }

  clearCache(){
    CacheService._isUserLoggedOn = false;
    CacheService._authenticationToken = '';          
    CacheService._timeToLive = 0;
    CacheService._currentUser.id = '';
    CacheService._currentUser.username = '';
    CacheService._currentUser.password = '';
  }

  setup(isValid, token, timeToLive, id, username, password){
    CacheService._isUserLoggedOn = isValid;
    CacheService._authenticationToken = token;          
    CacheService._timeToLive = timeToLive;
    CacheService._currentUser.id = id;
    CacheService._currentUser.username = username;
    CacheService._currentUser.password = password;
  }

  getCurrentUser(){
    return CacheService._currentUser;
  }

  getAuthenticationToken(){
    return CacheService._authenticationToken;
  }
}
