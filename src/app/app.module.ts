import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material';

import {apiwrapper} from './apis/apiwrapper';

import {AuthGuardService} from './services/authguard.service';
import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { MainComponent } from './components/main/main.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ValidateEqualDirective } from './directives/validate-equal.directive';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'main', component: MainComponent, canActivate:[AuthGuardService] },
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    MainComponent,
    PagenotfoundComponent,
    ValidateEqualDirective
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [AuthGuardService, UserService, apiwrapper,
    {provide:MAT_DATE_LOCALE, useValue:'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
