import { AuthService } from './config';
import { AuthguardGuard, AuthguardRegister } from './authguard.guard';
import { QuickviewproductsComponent } from './frontend/products/quickviewproducts/quickviewproducts.component';
import { ViewproductComponent } from './frontend/products/viewproduct/viewproduct.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {HomeComponent} from './frontend/home/home.component';
// import {AboutComponent} from './frontend/about/about.component';
import {BespokeComponent} from './frontend/bespoke/bespoke.component';
import {EducationComponent} from './frontend/education/education.component';
import {SectorsComponent} from './frontend/sectors/sectors.component';
import {AccessoriesComponent} from './frontend/accessories/accessories.component';
// import {ContactComponent} from './frontend/contact/contact.component';
import {GalleryComponent} from './frontend/gallery/gallery.component';
import { HttpClientModule} from '@angular/common/http';
import {ParentdetailsComponent} from './frontend/registration/parentdetails/parentdetails.component';
import {StudentdetailsComponent} from './frontend/registration/studentdetails/studentdetails.component';
import {FinalregistrationComponent} from './frontend/registration/finalregistration/finalregistration.component';
import {OtpComponent} from './frontend/registration/otp/otp.component';
import { UnifromsComponent } from './frontend/bespoke1/unifroms/unifroms.component';
import { combineLatest } from 'rxjs';
import { SchooluniformsComponent } from './frontend/eduction1/schooluniforms/schooluniforms.component';
import { CorporateuniformsComponent } from './frontend/eduction1/corporateuniforms/corporateuniforms.component';
import { SportsComponent } from './frontend/accessories1/sports/sports.component';
import { BagsComponent } from './frontend/accessories1/bags/bags.component';
import { CorporateComponent } from './frontend/sectors1/corporate/corporate.component';
import { HospitalityComponent } from './frontend/sectors1/hospitality/hospitality.component';
import { HealthcareComponent } from './frontend/sectors1/healthcare/healthcare.component';
import { AvaitionComponent } from './frontend/sectors1/avaition/avaition.component';
import { IndustrialComponent } from './frontend/sectors1/industrial/industrial.component';
import { FabricsComponent } from './frontend/bespoke1/fabrics/fabrics.component';
import { QuickpaymentComponent } from './frontend/payment/quickpayment/quickpayment.component';
import { ViewcartComponent } from './frontend/cart/viewcart/viewcart.component';
import { PaymentComponent } from './frontend/payment/payment/payment.component';
import { OrdersuccessComponent } from './frontend/ordersuccess/ordersuccess/ordersuccess.component';
import { ProfileComponent } from './frontend/profile/profile/profile.component';
import { OrderhistoryComponent } from './frontend/orderhistory/orderhistory/orderhistory.component';
import { RegisuccessComponent } from './frontend/registration/completeregistration/regisuccess/regisuccess.component';
import { PrivacypolicyComponent } from './frontend/privacypolicy/privacypolicy.component';
import { RetrunpolicyComponent } from './frontend/retrunpolicy/retrunpolicy.component';
import { TermsconditionsComponent } from './frontend/termsconditions/termsconditions.component';
import { FaqComponent } from './frontend/faq/faq.component';
import { UniformguideComponent } from './frontend/uniformguide/uniformguide.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'bespoke', component: BespokeComponent}, //canActivate: [AuthguardGuard]
  {path: 'about', loadChildren: './frontend/about/about.module#AboutModule'},
  {path: 'education', component: EducationComponent},
  {path: 'sector', component: SectorsComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'contact', loadChildren:'./frontend/contact/contact.module#ContactModule'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'auth_user', component: OtpComponent},
  {path: 'registration_step1', component: ParentdetailsComponent},//canActivate: [AuthguardRegister]
  {path: 'registration_step2', component: StudentdetailsComponent, },//canActivate: [AuthguardRegister]
  {path: 'registration_step3', component: FinalregistrationComponent, },//canActivate: [AuthguardRegister]
  {path: 'view-products', component: ViewproductComponent,canActivate: [AuthguardGuard]},
  {path: 'regissuccess', component: RegisuccessComponent,canActivate: [AuthguardGuard]},
  {path: 'quick-view-product/:productid/:studentid', component: QuickviewproductsComponent,canActivate: [AuthguardGuard]},
  {path: 'bespoke/fabrics', component:FabricsComponent},
  {path: 'bespoke/uniforms', component: UnifromsComponent},
  {path: 'education/schooluniforms', component: SchooluniformsComponent},
  {path: 'education/corporateuniforms', component: CorporateuniformsComponent},
  {path: 'accessories/sports', component: SportsComponent},
  {path: 'accessories/bags', component: BagsComponent},
  {path: 'sector/corporate', component: CorporateComponent},
  {path: 'sector/hospitality', component: HospitalityComponent},
  {path: 'sector/healthcare', component: HealthcareComponent},
  {path: 'sector/aviation', component: AvaitionComponent},
  {path: 'sector/industrial', component: IndustrialComponent},
  {path: 'quick-payment', component: QuickpaymentComponent,canActivate: [AuthguardGuard]},
  {path: 'payment', component: PaymentComponent,canActivate: [AuthguardGuard]},
  {path: 'success', component: OrdersuccessComponent,canActivate: [AuthguardGuard]},  
  {path: 'view-cart', component: ViewcartComponent,canActivate: [AuthguardGuard]},
  {path: 'profile', component: ProfileComponent,canActivate: [AuthguardGuard]},
  {path: 'orderhistory', component: OrderhistoryComponent,canActivate: [AuthguardGuard]},
  {path: 'privay-policy', component: PrivacypolicyComponent},
  {path: 'terms-condition', component: TermsconditionsComponent},
  {path: 'returns-policy', component: RetrunpolicyComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'uniform-guide', component:UniformguideComponent}
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [AuthguardGuard, AuthService, AuthguardRegister ] })
export class AppRoutingModule { }
