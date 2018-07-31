///<reference path="../../node_modules/angular-webstorage-service/src/storage-service.module.d.ts"/>
import { AuthguardGuard, AuthguardRegister } from './authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule}  from '@angular/material';
import {HTTP_INTERCEPTORS, HttpInterceptor} from '@angular/common/http';
import { ABC, AuthInterceptor, AuthService } from './config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/home/home.component';
//import { AboutComponent } from './frontend/about/about.component';
import { BespokeComponent } from './frontend/bespoke/bespoke.component';
import { EducationComponent } from './frontend/education/education.component';
import { AccessoriesComponent } from './frontend/accessories/accessories.component';
import { SectorsComponent } from './frontend/sectors/sectors.component';
// import { ContactComponent } from './frontend/contact/contact.component';
import { HeaderComponent } from './frontend/include/header/header.component';
import { FooterComponent } from './frontend/include/footer/footer.component';
import { GalleryComponent } from './frontend/gallery/gallery.component';
import { PrivacypolicyComponent } from './frontend/privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './frontend/termsconditions/termsconditions.component';
import { FaqComponent } from './frontend/faq/faq.component';
import { RetrunpolicyComponent } from './frontend/retrunpolicy/retrunpolicy.component';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ParentdetailsComponent } from './frontend/registration/parentdetails/parentdetails.component';
import { StudentdetailsComponent } from './frontend/registration/studentdetails/studentdetails.component';
import { FinalregistrationComponent } from './frontend/registration/finalregistration/finalregistration.component';
import { OtpComponent } from './frontend/registration/otp/otp.component';
import {StorageServiceModule} from 'angular-webstorage-service';
import {MatTableModule} from '@angular/material/table';
import {FormControl, Validators} from '@angular/forms';
import { ViewproductComponent } from './frontend/products/viewproduct/viewproduct.component';
import { QuickviewproductsComponent } from './frontend/products/quickviewproducts/quickviewproducts.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { CarouselModule, WavesModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import {SlickModule} from 'ngx-slick';
import {ToastrModule} from 'ngx-toastr';
import { UnifromsComponent } from './frontend/bespoke1/unifroms/unifroms.component';
import { FabricsComponent } from './frontend/bespoke1/fabrics/fabrics.component';
import { SchooluniformsComponent } from './frontend/eduction1/schooluniforms/schooluniforms.component';
import { CorporateuniformsComponent } from './frontend/eduction1/corporateuniforms/corporateuniforms.component';
import { SportsComponent } from './frontend/accessories1/sports/sports.component';
import { BagsComponent } from './frontend/accessories1/bags/bags.component';
import { CorporateComponent } from './frontend/sectors1/corporate/corporate.component';
import { HospitalityComponent } from './frontend/sectors1/hospitality/hospitality.component';
import { HealthcareComponent } from './frontend/sectors1/healthcare/healthcare.component';
import { AvaitionComponent } from './frontend/sectors1/avaition/avaition.component';
import { IndustrialComponent } from './frontend/sectors1/industrial/industrial.component';
import { HighlightDirective } from './highlight.directive';
//import { ColordirDirective } from './frontend/colordir.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { QuickpaymentComponent } from './frontend/payment/quickpayment/quickpayment.component';
import { ViewcartComponent } from './frontend/cart/viewcart/viewcart.component';
import { PaymentComponent } from './frontend/payment/payment/payment.component';
import { OrdersuccessComponent } from './frontend/ordersuccess/ordersuccess/ordersuccess.component';
import { ProfileComponent } from './frontend/profile/profile/profile.component';
import { OrderhistoryComponent } from './frontend/orderhistory/orderhistory/orderhistory.component';
import { Header2Component } from './frontend/include/header2/header2.component';
import {FunctionsService} from './functions.service';
import { RegisuccessComponent } from './frontend/registration/completeregistration/regisuccess/regisuccess.component';
import { UniformguideComponent } from './frontend/uniformguide/uniformguide.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // AboutComponent,
    BespokeComponent,
    EducationComponent,
    AccessoriesComponent,
    SectorsComponent,
    // ContactComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    PrivacypolicyComponent,
    TermsconditionsComponent,
    FaqComponent,
    RetrunpolicyComponent,
    ParentdetailsComponent,
    StudentdetailsComponent,  
    FinalregistrationComponent,
    OtpComponent,
    ViewproductComponent,
    QuickviewproductsComponent,
    UnifromsComponent,
    FabricsComponent,
    SchooluniformsComponent,
    CorporateuniformsComponent,
    SportsComponent,
    BagsComponent,
    CorporateComponent,
    HospitalityComponent,
    HealthcareComponent,
    AvaitionComponent,
    IndustrialComponent,
    HighlightDirective,
    QuickpaymentComponent,
    ViewcartComponent,
    PaymentComponent,
    OrdersuccessComponent,
    ProfileComponent,
    OrderhistoryComponent,
    Header2Component,
    RegisuccessComponent,
    UniformguideComponent,
   // ColordirDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    StorageServiceModule,
    MatTableModule,
    SlideshowModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule,
    SlickModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ABC, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    CookieService, AuthguardGuard, AuthService, AuthguardRegister, AuthInterceptor,FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }