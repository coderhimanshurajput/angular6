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
var ViewproductComponent = /** @class */ (function () {
    function ViewproductComponent(httpClient) {
        this.httpClient = httpClient;
        this.studentdata = [];
        this.product = {};
        this.list = {};
        this.productdata = [];
        this.API_Studentlist = development_1.GlobalPath.apiURL + "api/student/list";
        this.API_Productlist = development_1.GlobalPath.apiURL + "api/product/list";
    }
    ViewproductComponent.prototype.studentlist = function () {
        var _this = this;
        this.httpClient.post(this.API_Studentlist, this.list).subscribe(function (response) {
            _this.studentdata = response.students;
            console.log(response.students);
        });
    };
    /*-------------------------------------------Product List -----------------------------------------------------------*/
    ViewproductComponent.prototype.productlist = function () {
        var _this = this;
        this.httpClient.post(this.API_Productlist, this.product).subscribe(function (response) {
            console.log(response);
            _this.productdata = response.products;
            console.log(_this.productdata);
        });
    };
    /*-------------------------------------------End of Product List -------------------------------------------------- */
    ViewproductComponent.prototype.ngOnInit = function () {
        this.studentlist();
    };
    ViewproductComponent = __decorate([
        core_1.Component({
            selector: 'app-viewproduct',
            templateUrl: './viewproduct.component.html',
            styleUrls: ['./viewproduct.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ViewproductComponent);
    return ViewproductComponent;
}());
exports.ViewproductComponent = ViewproductComponent;
//# sourceMappingURL=viewproduct.component.js.map