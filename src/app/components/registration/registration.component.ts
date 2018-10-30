import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private userService:UserService) { 

  }
  displaySuccess = false;
  user = {
    firstname:'',
    lastname:'',
    dob:'',
    email:'',
    username:'',
    password:'',
    confirmpassword:''
  }

  ngOnInit() {
  }

  onSubmit(registrationData){
    let data = Object.assign({},registrationData.value);
    data.dateOfBirth =data.dateOfBirth.toLocaleDateString();
    //console.log(data);
    //console.log(registrationData.value);
    if(!registrationData.valid){
      console.log('Data is not valid');
      return;
    }

    this.userService.createUser(data)
    .subscribe(response => {
      this.displaySuccess = true;
    }, error => {
      alert(error.message);
    }, () => {});
  }
}
