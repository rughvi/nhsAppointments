import { TestBed, inject } from '@angular/core/testing';
import { AuthguardService } from './authguard.service';
describe('AuthguardService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AuthguardService]
        });
    });
    it('should be created', inject([AuthguardService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=authguard.service.spec.js.map