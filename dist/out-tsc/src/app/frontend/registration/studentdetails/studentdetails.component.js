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
var http_1 = require("@angular/common/http");
var development_1 = require("./../../../../environments/development");
var core_1 = require("@angular/core");
var StudentdetailsComponent = /** @class */ (function () {
    function StudentdetailsComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.register2 = {};
        this.API_Class = development_1.GlobalPath.apiURL + "api/class/list";
        this.API_School = development_1.GlobalPath.apiURL + "api/school/list";
        this.API_House = development_1.GlobalPath.apiURL + "api/school/house";
        this.API_SaveStudent = development_1.GlobalPath.apiURL + "api/user/register/student";
        this.classlist = [];
        this.houselist = [];
    }
    StudentdetailsComponent.prototype.schooldata = function () {
        var _this = this;
        this.httpClient.get(this.API_School).subscribe(function (response) {
            console.log(response);
            _this.schoollist = response.school;
            console.log(_this.schoollist);
        });
    };
    StudentdetailsComponent.prototype.housedata = function () {
        var _this = this;
        this.httpClient.post(this.API_House, this.register2).subscribe(function (response) {
            _this.houselist = response.house;
            console.log(response);
            console.log(_this.houselist);
        });
    };
    StudentdetailsComponent.prototype.classdata = function () {
        var _this = this;
        this.httpClient.get(this.API_Class).subscribe(function (response) {
            console.log(response.class.length);
            // console.log(response.class[].name);
            for (var i = 0; i <= response.class.length - 1; i++) {
                _this.classlist.push(response.class[i].name);
                // console.log(this.classlist);
            }
        });
    };
    StudentdetailsComponent.prototype.savestudentdetail = function () {
        var _this = this;
        this.httpClient.post(this.API_SaveStudent, this.register2).subscribe(function (response) {
            console.log(response);
            if (response.response_code === 200) {
                _this.router.navigate(['registration_step3']);
            }
        });
        console.log(this.register2);
    };
    StudentdetailsComponent.prototype.ngOnInit = function () {
        this.classdata();
        this.schooldata();
    };
    StudentdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-studentdetails',
            templateUrl: './studentdetails.component.html',
            styleUrls: ['./studentdetails.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], StudentdetailsComponent);
    return StudentdetailsComponent;
}());
exports.StudentdetailsComponent = StudentdetailsComponent;
//# sourceMappingURL=studentdetails.component.js.map