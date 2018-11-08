import { Injectable } from '@angular/core';
import {apiwrapper} from '../apis/apiwrapper';
import {CacheService} from '../services/cache.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private apiwrapper:apiwrapper, private cacheService:CacheService) { }

  getAppointmentsForUser(userId){

  }
}
