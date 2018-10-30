var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { AuthGuardService } from './services/authguard.service';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { MainComponent } from './components/main/main.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ValidateEqualDirective } from './directives/validate-equal.directive';
var appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent },
    { path: 'main', component: MainComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                BrowserModule,
                BrowserAnimationsModule,
                MatDatepickerModule,
                MatNativeDateModule,
                FormsModule
            ],
            providers: [AuthGuardService, UserService,
                { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map