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
var development_1 = require("./../../../../environments/development");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var ParentdetailsComponent = /** @class */ (function () {
    function ParentdetailsComponent(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
        this.API_ParentDetail = development_1.GlobalPath.apiURL + "api/user/register/profile";
        this.API_UserDetail = development_1.GlobalPath.apiURL + "api/user/details";
        this.register1 = {};
    }
    ParentdetailsComponent.prototype.Userdetail = function () {
        var _this = this;
        this.httpclient.post(this.API_UserDetail, this.register1).subscribe(function (response) {
            console.log(response);
            _this.register1.email = response.user.email;
        });
    };
    ParentdetailsComponent.prototype.parentdetail = function () {
        var _this = this;
        this.httpclient.post(this.API_ParentDetail, this.register1).subscribe(function (response) {
            console.log(response);
            if (response.response_code === 200) {
                _this.router.navigate(['registration_step2']);
            }
        });
    };
    // log(x) {
    //   console.log(x);
    // }
    ParentdetailsComponent.prototype.ngOnInit = function () {
        this.Userdetail();
    };
    ParentdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-parentdetails',
            templateUrl: './parentdetails.component.html',
            styleUrls: ['./parentdetails.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], ParentdetailsComponent);
    return ParentdetailsComponent;
}());
exports.ParentdetailsComponent = ParentdetailsComponent;
//# sourceMappingURL=parentdetails.component.js.map