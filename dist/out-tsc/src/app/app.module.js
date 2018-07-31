"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/angular-webstorage-service/src/storage-service.module.d.ts"/>
var authguard_guard_1 = require("./authguard.guard");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var http_1 = require("@angular/common/http");
var config_1 = require("./config");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./frontend/home/home.component");
//import { AboutComponent } from './frontend/about/about.component';
var bespoke_component_1 = require("./frontend/bespoke/bespoke.component");
var education_component_1 = require("./frontend/education/education.component");
var accessories_component_1 = require("./frontend/accessories/accessories.component");
var sectors_component_1 = require("./frontend/sectors/sectors.component");
// import { ContactComponent } from './frontend/contact/contact.component';
var header_component_1 = require("./frontend/include/header/header.component");
var footer_component_1 = require("./frontend/include/footer/footer.component");
var gallery_component_1 = require("./frontend/gallery/gallery.component");
var privacypolicy_component_1 = require("./frontend/privacypolicy/privacypolicy.component");
var termsconditions_component_1 = require("./frontend/termsconditions/termsconditions.component");
var faq_component_1 = require("./frontend/faq/faq.component");
var retrunpolicy_component_1 = require("./frontend/retrunpolicy/retrunpolicy.component");
var http_2 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var parentdetails_component_1 = require("./frontend/registration/parentdetails/parentdetails.component");
var studentdetails_component_1 = require("./frontend/registration/studentdetails/studentdetails.component");
var finalregistration_component_1 = require("./frontend/registration/finalregistration/finalregistration.component");
var otp_component_1 = require("./frontend/registration/otp/otp.component");
var angular_webstorage_service_1 = require("angular-webstorage-service");
var table_1 = require("@angular/material/table");
var viewproduct_component_1 = require("./frontend/products/viewproduct/viewproduct.component");
var quickviewproducts_component_1 = require("./frontend/products/quickviewproducts/quickviewproducts.component");
var ng_simple_slideshow_1 = require("ng-simple-slideshow");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var ngx_slick_1 = require("ngx-slick");
var ngx_toastr_1 = require("ngx-toastr");
var unifroms_component_1 = require("./frontend/bespoke1/unifroms/unifroms.component");
var fabrics_component_1 = require("./frontend/bespoke1/fabrics/fabrics.component");
var schooluniforms_component_1 = require("./frontend/eduction1/schooluniforms/schooluniforms.component");
var corporateuniforms_component_1 = require("./frontend/eduction1/corporateuniforms/corporateuniforms.component");
var sports_component_1 = require("./frontend/accessories1/sports/sports.component");
var bags_component_1 = require("./frontend/accessories1/bags/bags.component");
var corporate_component_1 = require("./frontend/sectors1/corporate/corporate.component");
var hospitality_component_1 = require("./frontend/sectors1/hospitality/hospitality.component");
var healthcare_component_1 = require("./frontend/sectors1/healthcare/healthcare.component");
var avaition_component_1 = require("./frontend/sectors1/avaition/avaition.component");
var industrial_component_1 = require("./frontend/sectors1/industrial/industrial.component");
var highlight_directive_1 = require("./highlight.directive");
//import { ColordirDirective } from './frontend/colordir.directive';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                // AboutComponent,
                bespoke_component_1.BespokeComponent,
                education_component_1.EducationComponent,
                accessories_component_1.AccessoriesComponent,
                sectors_component_1.SectorsComponent,
                // ContactComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                gallery_component_1.GalleryComponent,
                privacypolicy_component_1.PrivacypolicyComponent,
                termsconditions_component_1.TermsconditionsComponent,
                faq_component_1.FaqComponent,
                retrunpolicy_component_1.RetrunpolicyComponent,
                parentdetails_component_1.ParentdetailsComponent,
                studentdetails_component_1.StudentdetailsComponent,
                finalregistration_component_1.FinalregistrationComponent,
                otp_component_1.OtpComponent,
                viewproduct_component_1.ViewproductComponent,
                quickviewproducts_component_1.QuickviewproductsComponent,
                unifroms_component_1.UnifromsComponent,
                fabrics_component_1.FabricsComponent,
                schooluniforms_component_1.SchooluniformsComponent,
                corporateuniforms_component_1.CorporateuniformsComponent,
                sports_component_1.SportsComponent,
                bags_component_1.BagsComponent,
                corporate_component_1.CorporateComponent,
                hospitality_component_1.HospitalityComponent,
                healthcare_component_1.HealthcareComponent,
                avaition_component_1.AvaitionComponent,
                industrial_component_1.IndustrialComponent,
                highlight_directive_1.HighlightDirective,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_2.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                angular_webstorage_service_1.StorageServiceModule,
                table_1.MatTableModule,
                ng_simple_slideshow_1.SlideshowModule,
                angular_bootstrap_md_1.CarouselModule,
                angular_bootstrap_md_1.WavesModule,
                angular_bootstrap_md_1.MDBBootstrapModule,
                ngx_slick_1.SlickModule,
                ngx_toastr_1.ToastrModule,
                material_1.MatCardModule
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: config_1.ABC, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: config_1.AuthInterceptor, multi: true },
                ngx_cookie_service_1.CookieService, authguard_guard_1.AuthguardGuard, config_1.AuthService, authguard_guard_1.AuthguardRegister
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map