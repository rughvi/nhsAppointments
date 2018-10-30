var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.user = {
            firstname: '',
            lastname: '',
            dob: '',
            email: '',
            username: '',
            password: '',
            confirmpassword: ''
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function (registrationData) {
        console.log(registrationData.value);
        if (!registrationData.valid) {
            console.log('Data is not valid');
            return;
        }
    };
    RegistrationComponent = __decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map