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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var development_1 = require("../../../environments/development");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, httpClient, cookieService) {
        this.router = router;
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.homemessage = "hello aboutus";
        this.User = {};
        this.schoollist = [];
        this.indianschool = [];
        this.uaeschool = [];
        this.slideConfig = { "slidesToShow": 3, "slidesToScroll": 1 };
        this.API_Call = development_1.GlobalPath.apiURL + "api/school/list";
        this.API_login = development_1.GlobalPath.apiURL + "api/auth/login";
        this.API_Register = development_1.GlobalPath.apiURL + "api/user/register";
    }
    HomeComponent.prototype.register = function () {
        var _this = this;
        /*          alert('hello');*/
        this.httpClient.post(this.API_Register, this.User).subscribe(function (response) {
            console.log(response);
            if (response.response_code === 200) {
                _this.router.navigate(['auth_user']);
                _this.cookieService.set('otp_code', response.otp_id, 1 / 8);
            }
        });
    };
    HomeComponent.prototype.userlogin = function () {
        var _this = this;
        this.httpClient.post(this.API_login, this.User).subscribe(function (response) {
            console.log(response);
            var userdata = response.user;
            if (response.response_code === 200 && response.registration.step1 === true && response.registration.step2 === false) {
                _this.router.navigate(['registration_step1']);
                _this.cookieService.set('token', userdata, 1);
            }
            else if (response.response_code === 200 &&
                response.registration.step1 === true &&
                response.registration.step2 === true &&
                response.registration.step3 === false) {
                _this.router.navigate(['registration_step2']);
                _this.cookieService.set('token', userdata, 1);
                _this.cookieService.set('step1', response.registration.step2, 1);
                _this.cookieService.set('step2', response.registration.step3, 1);
                _this.cookieService.set('step3', response.registration.terms_conditions, 1);
                localStorage.setItem('token', userdata);
            }
            else if (response.response_code === 200 &&
                response.registration.step1 === true &&
                response.registration.step2 === true &&
                response.registration.step3 === true &&
                response.registration.terms_conditions === false) {
                localStorage.setItem('token', userdata);
                localStorage.setItem('data', "hello");
                _this.router.navigate(['registration_step3']);
                _this.cookieService.set('token', userdata, 1);
            }
        }, function (error) {
            console.log(error | error);
            console.log(Response);
        });
    };
    HomeComponent.prototype.getschool = function () {
        var _this = this;
        this.httpClient.get(this.API_Call)
            .subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.school.length; i++) {
                var category = response.school[i];
                console.log(category.category);
                if (response.school[i].category == 2) {
                    console.log(category);
                    _this.uaeschool.push(category);
                    console.log(_this.uaeschool);
                }
                else if (response.school[i].category == 1) {
                    _this.indianschool.push(category);
                    console.log(_this.indianschool);
                }
            }
            _this.schoollist = response.school;
            console.log(_this.indianschool);
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getschool();
        //  this.cookieService.set( 'token','dfsdfsdf' );
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient,
            ngx_cookie_service_1.CookieService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
/*export class Login implements OnInit  {

  User: any = {

  };

  private API_login = `${GlobalPath.apiURL}api/auth/login`;

  constructor( private httpClient: HttpClient, private cookieService: CookieService ) { }

  userlogin() {

    this.httpClient.post(this.API_login, this.User).subscribe( (response) => {
      console.log(response);
    })
  }
  ngOnInit(): void {
    this.cookieService.set( 'token','dfsdfsdf' );
  }

}*/
//# sourceMappingURL=home.component.js.map