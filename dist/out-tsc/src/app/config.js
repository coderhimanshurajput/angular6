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
var ngx_cookie_service_1 = require("ngx-cookie-service");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(cookieService) {
        this.cookieService = cookieService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var Token = this.cookieService.get("token");
        console.log(Token);
        if (Token) {
            console.log(Token);
            var cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + Token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_cookie_service_1.CookieService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    return ABC;
}());
exports.ABC = ABC;
var AuthService = /** @class */ (function () {
    function AuthService(cookieService) {
        this.cookieService = cookieService;
    }
    AuthService.prototype.getToken = function () {
        return this.cookieService.get("token");
    };
    AuthService.prototype.isloggedin = function () {
        return this.getToken() !== "";
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_cookie_service_1.CookieService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=config.js.map