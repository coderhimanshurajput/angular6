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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var development_1 = require("./../../../../environments/development");
var FinalregistrationComponent = /** @class */ (function () {
    function FinalregistrationComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.list = {};
        this.studentdata = [];
        this.singlestudent = {};
        this.parentdata = {};
        this.editparentdetail = {};
        this.classlist = [];
        this.schooldata = [];
        this.housedata = [];
        this.API_Studentlist = development_1.GlobalPath.apiURL + "api/student/list";
        this.API_remove = development_1.GlobalPath.apiURL + "api/student/delete";
        this.API_PartentDetail = development_1.GlobalPath.apiURL + "api/user/details";
        this.API_EditUserDetail = development_1.GlobalPath.apiURL + "api/user/update";
        this.API_SingleStudentData = development_1.GlobalPath.apiURL + "api/student/details";
        this.API_Class = development_1.GlobalPath.apiURL + "api/class/list";
        this.API_School = development_1.GlobalPath.apiURL + "api/school/list";
        this.API_House = development_1.GlobalPath.apiURL + "api/school/house";
    }
    FinalregistrationComponent.prototype.parentDetail = function () {
        var _this = this;
        this.httpClient.post(this.API_PartentDetail, this.list).subscribe(function (response) {
            _this.parentdata = response;
        });
    };
    /*Parent detail for poup box */
    FinalregistrationComponent.prototype.parentDetail2 = function () {
        var _this = this;
        this.httpClient.post(this.API_PartentDetail, this.list).subscribe(function (response) {
            _this.editparentdetail = response.user;
            _this.editparentdetail.pin_code = response.user.address.pin_code;
            _this.editparentdetail.address = response.user.address.address;
            console.log(response.user.address);
        });
    };
    FinalregistrationComponent.prototype.studentlist = function () {
        var _this = this;
        this.httpClient.post(this.API_Studentlist, this.list).subscribe(function (response) {
            _this.studentdata = response.students;
            console.log(response.students);
            console.log(_this.studentdata);
        });
    };
    FinalregistrationComponent.prototype.removestudent = function (_id) {
        var _this = this;
        console.log(_id);
        var student_id = { student_id: _id };
        this.httpClient.post(this.API_remove, student_id).subscribe(function (response) {
            console.log(response);
            if (response.response_code === 200) {
                _this.studentlist();
            }
        });
    };
    FinalregistrationComponent.prototype.edituserdetail = function () {
        var _this = this;
        this.httpClient.post(this.API_EditUserDetail, this.editparentdetail).subscribe(function (response) {
            console.log(response);
            _this.parentDetail();
        });
    };
    /*------------------------------List of Single Student----------------------------------*/
    FinalregistrationComponent.prototype.singlestudentdata = function (_id) {
        var _this = this;
        var studentid = {
            student_id: _id
        };
        this.httpClient.post(this.API_SingleStudentData, studentid).subscribe(function (response) {
            console.log(response);
            _this.singlestudent = response.student;
            var school_id = {
                school_id: response.student.school_id
            };
            _this.httpClient.post(_this.API_House, school_id).subscribe(function (response) {
                _this.housedata = response.house;
                console.log(_this.housedata);
            });
        });
    };
    /*------------------------------End of Single Student API------------------------------*/
    /*------------------------------House List--------------------------------------------*/
    FinalregistrationComponent.prototype.houselist = function () {
        var _this = this;
        this.httpClient.post(this.API_House, this.singlestudent).subscribe(function (response) {
            _this.housedata = response.house;
            console.log(_this.housedata);
        });
    };
    /*------------------------------End of House List------------------------------------*/
    /*------------------------------Class List------------------------------------------*/
    FinalregistrationComponent.prototype.classdata = function () {
        var _this = this;
        this.httpClient.get(this.API_Class).subscribe(function (response) {
            _this.classlist = response.class;
            console.log(_this.classlist);
        });
    };
    /*------------------------------End of Class List------------------------------------*/
    /*------------------------------list of School--------------------------------------*/
    FinalregistrationComponent.prototype.schoollist = function () {
        var _this = this;
        this.httpClient.get(this.API_School).subscribe(function (response) {
            console.log(response);
            _this.schooldata = response.school;
            console.log(_this.schooldata);
        });
    };
    /*------------------------------End of School List---------------------------------*/
    FinalregistrationComponent.prototype.Addchild = function () {
        this.router.navigate(['registration_step2']);
    };
    FinalregistrationComponent.prototype.ngOnInit = function () {
        this.studentlist();
        this.parentDetail();
        this.classdata();
        this.schoollist();
    };
    FinalregistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-finalregistration',
            templateUrl: './finalregistration.component.html',
            styleUrls: ['./finalregistration.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], FinalregistrationComponent);
    return FinalregistrationComponent;
}());
exports.FinalregistrationComponent = FinalregistrationComponent;
//# sourceMappingURL=finalregistration.component.js.map