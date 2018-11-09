import { Component, OnInit } from '@angular/core';
import {CacheService} from '../../services/cache.service';
import {UserService} from '../../services/user.service';
import { UserAppointmentsResponseModel } from '../../models/UserAppointmentsResponseModel';
import { UserHospitalsModel } from '../../models/UserHospitalsModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private cacheService:CacheService, private userService:UserService) { }
  username='test';
  fetching=false;
  isNavbarCollapsed=true;
  userHospitalAppointments:UserHospitalsModel[];
  ngOnInit() {
    let user = this.cacheService.getCurrentUser();
    this.username = user.username;
    this.fetching = true;
    this.userService.getAppointmentsForUserId(user.id)
    .subscribe(
      userHospitalAppointments =>{
        this.userHospitalAppointments = userHospitalAppointments;
        this.fetching = false;
      },
      errorModel => {
        //TODO
        this.fetching = false;
      },
      () => {});
  }
}
