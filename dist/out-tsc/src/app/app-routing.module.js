"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var authguard_guard_1 = require("./authguard.guard");
var quickviewproducts_component_1 = require("./frontend/products/quickviewproducts/quickviewproducts.component");
var viewproduct_component_1 = require("./frontend/products/viewproduct/viewproduct.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./frontend/home/home.component");
// import {AboutComponent} from './frontend/about/about.component';
var bespoke_component_1 = require("./frontend/bespoke/bespoke.component");
var education_component_1 = require("./frontend/education/education.component");
var sectors_component_1 = require("./frontend/sectors/sectors.component");
var accessories_component_1 = require("./frontend/accessories/accessories.component");
// import {ContactComponent} from './frontend/contact/contact.component';
var gallery_component_1 = require("./frontend/gallery/gallery.component");
var http_1 = require("@angular/common/http");
var parentdetails_component_1 = require("./frontend/registration/parentdetails/parentdetails.component");
var studentdetails_component_1 = require("./frontend/registration/studentdetails/studentdetails.component");
var finalregistration_component_1 = require("./frontend/registration/finalregistration/finalregistration.component");
var otp_component_1 = require("./frontend/registration/otp/otp.component");
var unifroms_component_1 = require("./frontend/bespoke1/unifroms/unifroms.component");
var schooluniforms_component_1 = require("./frontend/eduction1/schooluniforms/schooluniforms.component");
var corporateuniforms_component_1 = require("./frontend/eduction1/corporateuniforms/corporateuniforms.component");
var sports_component_1 = require("./frontend/accessories1/sports/sports.component");
var bags_component_1 = require("./frontend/accessories1/bags/bags.component");
var corporate_component_1 = require("./frontend/sectors1/corporate/corporate.component");
var hospitality_component_1 = require("./frontend/sectors1/hospitality/hospitality.component");
var healthcare_component_1 = require("./frontend/sectors1/healthcare/healthcare.component");
var avaition_component_1 = require("./frontend/sectors1/avaition/avaition.component");
var industrial_component_1 = require("./frontend/sectors1/industrial/industrial.component");
var fabrics_component_1 = require("./frontend/bespoke1/fabrics/fabrics.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'bespoke', component: bespoke_component_1.BespokeComponent },
    { path: 'about', loadChildren: './frontend/about/about.module#AboutModule' },
    { path: 'education', component: education_component_1.EducationComponent },
    { path: 'sector', component: sectors_component_1.SectorsComponent },
    { path: 'accessories', component: accessories_component_1.AccessoriesComponent },
    { path: 'contact', loadChildren: './frontend/contact/contact.module#ContactModule' },
    { path: 'gallery', component: gallery_component_1.GalleryComponent },
    { path: 'auth_user', component: otp_component_1.OtpComponent },
    { path: 'registration_step1', component: parentdetails_component_1.ParentdetailsComponent },
    { path: 'registration_step2', component: studentdetails_component_1.StudentdetailsComponent },
    { path: 'registration_step3', component: finalregistration_component_1.FinalregistrationComponent },
    { path: 'view-products', component: viewproduct_component_1.ViewproductComponent },
    { path: 'quick-view-product', component: quickviewproducts_component_1.QuickviewproductsComponent },
    { path: 'bespoke/fabrics', component: fabrics_component_1.FabricsComponent },
    { path: 'bespoke/uniforms', component: unifroms_component_1.UnifromsComponent },
    { path: 'education/schooluniforms', component: schooluniforms_component_1.SchooluniformsComponent },
    { path: 'education/corporateuniforms', component: corporateuniforms_component_1.CorporateuniformsComponent },
    { path: 'accessories/sports', component: sports_component_1.SportsComponent },
    { path: 'accessories/bags', component: bags_component_1.BagsComponent },
    { path: 'sector/corporate', component: corporate_component_1.CorporateComponent },
    { path: 'sector/hospitality', component: hospitality_component_1.HospitalityComponent },
    { path: 'sector/healthcare', component: healthcare_component_1.HealthcareComponent },
    { path: 'sector/aviation', component: avaition_component_1.AvaitionComponent },
    { path: 'sector/industrial', component: industrial_component_1.IndustrialComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes), http_1.HttpClientModule],
            exports: [router_1.RouterModule],
            providers: [authguard_guard_1.AuthguardGuard, config_1.AuthService, authguard_guard_1.AuthguardRegister]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map