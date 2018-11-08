import { Component, OnInit } from '@angular/core';
import {CacheService} from '../../services/cache.service';
import {UserService} from '../../services/user.service';
import { ErrorModel } from '../../models/ErrorModel';
import { ErrorStatus } from '../../apis/apiErrorStatus';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user={};
  constructor(private snackbar:MatSnackBar, private cacheService:CacheService, private userService:UserService) { }

  ngOnInit() {
    let user = this.cacheService.getCurrentUser();
    this.userService.getUserDetails(user.id)
    .subscribe(userDetails => {
      this.user = userDetails;
    },
    (errorModel:ErrorModel) => {
      if(errorModel.status === ErrorStatus.Unauthorized){
        this.snackbar.open('User is not authorized', '', {duration:2000, panelClass:['red-snackbar']});
        return;
      }
      if(errorModel.status === ErrorStatus.Forbidden ){
        this.snackbar.open('User is not allowed', '', {duration:2000, panelClass:['red-snackbar']});
        return;
      }
      if(errorModel.status === ErrorStatus.NotFound){
        this.snackbar.open('Resource is not found', '', {duration:2000, panelClass:['red-snackbar']});
        return;
      }
    })
  }

}
