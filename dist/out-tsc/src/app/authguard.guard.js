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
var ngx_cookie_service_1 = require("ngx-cookie-service");
var core_1 = require("@angular/core");
var config_1 = require("./config");
var router_1 = require("@angular/router");
var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        if (this.user.isloggedin()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthguardGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [config_1.AuthService, router_1.Router])
    ], AuthguardGuard);
    return AuthguardGuard;
}());
exports.AuthguardGuard = AuthguardGuard;
var AuthguardRegister = /** @class */ (function () {
    function AuthguardRegister(user, router, cookieService) {
        this.user = user;
        this.router = router;
        this.cookieService = cookieService;
    }
    AuthguardRegister.prototype.canActivate = function (next, state) {
        if (this.user.isloggedin() && this.cookieService.get('step1') === " true") {
            console.log(this.cookieService.get('step1'));
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthguardRegister = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [config_1.AuthService, router_1.Router, ngx_cookie_service_1.CookieService])
    ], AuthguardRegister);
    return AuthguardRegister;
}());
exports.AuthguardRegister = AuthguardRegister;
//# sourceMappingURL=authguard.guard.js.map