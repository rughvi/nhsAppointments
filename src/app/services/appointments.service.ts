import { Injectable } from '@angular/core';
import {apiwrapper} from '../apis/apiwrapper';
import {CacheService} from '../services/cache.service';

@Injectable()
export class AppointmentsService {

  constructor(private apiwrapper:apiwrapper, private cacheService:CacheService) { }

  getAppointmentsForUser(userId){

  }

  //only for POC
  createAppointment(userId){
    return this.apiwrapper.createAppointments(userId);
  }
}
