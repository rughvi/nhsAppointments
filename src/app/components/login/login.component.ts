import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService:UserService, private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(loginForm){
    console.log(loginForm.value);
    console.log(loginForm.valid);

    if(!loginForm.valid){
      this.snackbar.open('Please provide all mandatory fields','',{duration:2000, panelClass:['red-snackbar']});
      return;
    }

    this.userService.loginUser(loginForm.value)
    .subscribe(response => {
      this.router.navigate(['/main']);
    }, errorModel => {
      if(errorModel.status == 401){
        this.snackbar.open('Invalid username or password', '', {duration:2000, panelClass:['red-snackbar']});
      }
      //alert(error.message);
    }, () => {});
  }
}
