"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var development_1 = require("../../../../environments/development");
var router_1 = require("@angular/router");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var OtpComponent = /** @class */ (function () {
    function OtpComponent(httpClient, router, cookieService) {
        this.httpClient = httpClient;
        this.router = router;
        this.cookieService = cookieService;
        this.API_OTP = development_1.GlobalPath.apiURL + "api/otp/verify";
        this.OTP = {
            otp_id: this.cookieService.get('otp_code')
        };
    }
    OtpComponent.prototype.verifyotp = function () {
        var _this = this;
        this.httpClient.post(this.API_OTP, this.OTP).subscribe(function (response) {
            if (response.response_code === 200) {
                _this.cookieService.set('token', response.user, 1);
                _this.router.navigate(['registration_step1']);
            }
        });
    };
    OtpComponent.prototype.ngOnInit = function () {
    };
    OtpComponent = __decorate([
        core_1.Component({
            selector: 'app-otp',
            templateUrl: './otp.component.html',
            styleUrls: ['./otp.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, ngx_cookie_service_1.CookieService])
    ], OtpComponent);
    return OtpComponent;
}());
exports.OtpComponent = OtpComponent;
//# sourceMappingURL=otp.component.js.map