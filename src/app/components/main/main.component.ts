import { Component, OnInit } from '@angular/core';
import {CacheService} from '../../services/cache.service';
import {UserService} from '../../services/user.service';
import { UserAppointmentsResponseModel } from '../../models/UserAppointmentsResponseModel';
import { UserHospitalsModel } from '../../models/UserHospitalsModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {ErrorStatus} from '../../apis/apiErrorStatus';
import {concatMap} from 'rxjs/operators';
import {AppointmentsService} from '../../services/appointments.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private cacheService:CacheService, private userService:UserService, private modalService: NgbModal, private snackbar:MatSnackBar, private router:Router, private appointmentsService:AppointmentsService) { }
  username='test';
  fetching=false;
  isNavbarCollapsed=true;
  userHospitalAppointments:UserHospitalsModel[];
  closeResult: string;
  ngOnInit() {
    this.getUserHospitalAppointments();
  }

  getUserHospitalAppointments(){
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.onAddHospital(result);
    }, (reason) => {
      
    });
  }

  onAddHospital(addhospitalform){
    console.log(addhospitalform.value);
    console.log(addhospitalform.valid);

    if(!addhospitalform.valid){
      this.snackbar.open('Please provide all mandatory fields','',{duration:2000, panelClass:['red-snackbar']});
      return;
    }
    let data = {
      hospitalId:addhospitalform.value.number,
      hospitalName:addhospitalform.value.name
    };

    let user = this.cacheService.getCurrentUser();
    //TODO - simplify the below calls - concat/marge/then/map?
    // this.userService.addHospital(user.id, data)
    // .subscribe(response =>{
    //   this.appointmentsService.createAppointment(user.id)
    //   .subscribe(response => {
    //     this.getUserHospitalAppointments();
    //   }, errorModel =>{
    //     if(errorModel.status == ErrorStatus.Unauthorized){
    //       //TODO - nothing
    //     }
    //   }, () => {})
    // }, errorModel =>{
    //   if(errorModel.status == ErrorStatus.Unauthorized){
    //     //TODO - nothing
    //   }
    // }, () => {});

    this.userService.addHospital(user.id, data)
    .pipe(concatMap(response => this.appointmentsService.createAppointment(user.id)))
    .subscribe(response => {
      this.getUserHospitalAppointments();
    },errorModel => {
    //   if(errorModel.status == ErrorStatus.Unauthorized){
    //     //TODO - nothing
    //   }
    },() => {});
  }
}
