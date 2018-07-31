import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalPath} from '../../../environments/development';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import {Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {FormControl,FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {LocalStorage} from '@ngx-pwa/local-storage';
import { ToastrService } from 'ngx-toastr';
import { JsonPipe } from '@angular/common';
import {FunctionsService} from '../../functions.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homemessage = "hello aboutus";

  regisUser: any = {

  };
  LoginUser:any={};
   schoollist=[];
   indianschool=[];
   uaeschool = [];
   schoolimage={}
   slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};
   Token;
   registerForm: FormGroup
   loginForm: FormGroup


  private API_Call = `${GlobalPath.apiURL}api/school/list`;
  private API_login = `${GlobalPath.apiURL}api/auth/login`;
  private API_Register = `${GlobalPath.apiURL}api/user/register`;
  private API_Cartlist = `${GlobalPath.apiURL}api/cart/list`;

  constructor(private router: Router,  private httpClient: HttpClient,
private cookieService: CookieService, private functionservice:FunctionsService,
private toast:ToastrService,
private localStorage:LocalStorage,
private fb: FormBuilder) { }

register() {

            

            
            if (this.registerForm.invalid) {
                return;
            }

          this.httpClient.post<any>(this.API_Register,this.registerForm.value).subscribe((response)  => {
            console.log(response);

            if (response.response_code === 200) {
              this.router.navigate(['auth_user']);
              this.cookieService.set('otp_code', response.otp_id, 1/8);
              this.cookieService.set('useremail',this.regisUser.email);
              this.toast.success("You you've Succcessfully Registered");
            }
          },(error)=>{
            this.toast.error("Already Register");
          });
      
    }
/*---------------------------------------------Login APi--------------------------------------------- */
  userlogin() {

        if (this.loginForm.invalid) {
          return;
      }

    this.httpClient.post<any>(this.API_login, this.loginForm.value).subscribe( (response) => {
      console.log(response);
      const userdata = response.user;
      if (response.response_code === 200 && response.registration.step1 === true && response.registration.step2 === false) {

        this.router.navigate(['registration_step1']);
        this.cookieService.set( 'token', userdata, 1);
      } else if (response.response_code === 200 &&
        response.registration.step1 === true &&
        response.registration.step2 === true &&
        response.registration.step3 === false) {

        this.router.navigate(['registration_step2']);
        this.cookieService.set( 'token',  userdata, 1);
        this.cookieService.set( 'step1',  response.registration.step2, 1);
        this.cookieService.set( 'step2',  response.registration.step3, 1);
        this.cookieService.set( 'step3',  response.registration.terms_conditions, 1);
        localStorage.setItem('token', userdata);
        this.updatelogin();

      }  else if (response.response_code === 200 &&
        response.registration.step1 === true &&
        response.registration.step2 === true &&
        response.registration.step3 === true &&
        response.registration.terms_conditions === false) {
        this.updatelogin();
        localStorage.setItem('token', userdata);
        localStorage.setItem('data', "hello");
        

        this.router.navigate(['registration_step3']);
        this.cookieService.set( 'token', userdata, 1);
      }else if (response.response_code === 200 &&
        response.registration.step1 === true &&
        response.registration.step2 === true &&
        response.registration.step3 === true &&
        response.registration.terms_conditions === true) {
        localStorage.setItem('token', userdata);
        localStorage.setItem('data', "hello");

        this.router.navigate(['view-products']);
        this.cookieService.set( 'token', userdata, 1);
        this.cookieService.set('terms_conditions',response.registration.terms_conditions)
        this.localStorage.setItem('token', userdata);
        this.updatelogin();
        this.cartlist();
        this.toast.success("Successfully Loggedin")

      }
    },(error)=>{
      this.regisUser="";
      console.log(error);
      console.log(Response);
      this.toast.error(error.error.message)

    });
  }
/*-------------------------------------------------End of Login API------------------------------------ */
/*-------------------------------------------------School Image----------------------------------------*/
schoollogo(image) {

    this.schoolimage=image;
  }
/*-------------------------------------------------End og School Image--------------------------------*/

  getschool() {
    this.httpClient.get<any>(this.API_Call)
      .subscribe((response) => {
          console.log(response);

          for(let i=0; i<response.school.length; i++) {
            const category=response.school[i];
           console.log(category.category);
            if(response.school[i].category==2){
              console.log(category);
              this.uaeschool.push(category);
              console.log(this.uaeschool);
            }else if(response.school[i].category==1) {

              this.indianschool.push(category);
              console.log(this.indianschool);
            }
          }
          this.schoollist=response.school
          console.log(this.indianschool);
          console.log(this.uaeschool);


        },
        error => {

          console.log(error);
        });
  }





/*------------------------------------check login-------------------------------------*/
updatelogin() {
  // this.Token = this.cookieService.get('token');
  this.functionservice.loggedin(this.cookieService.get('token'));

}

/*------------------------------------end of Check login------------------------------*/

     /*------------------------------------Count Cart-------------------------------------- */
     cartlist(){
      if(this.cookieService.get('token')) {
      this.httpClient.post<any>(this.API_Cartlist,{}).subscribe((response)=>{
        console.log(response);
          // this.productcount=response.cart.length;

          this.functionservice.changecartquantity(response.cart.length);

      },(error)=>{
        console.log(error);
      })
    }

    }

/*------------------------------------Clear Form Data----------------------------------*/

    cleardata(){

      this.registerForm.markAsPristine();
    }

/*------------------------------------End of Clear Form-------------------------------*/
/*------------------------------------End of Count Cart-------------------------------*/
  ngOnInit() {
     this.getschool();

      this.registerForm =this.fb.group({
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]]
      })

      this.loginForm= this.fb.group({
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required]]
      })

  }

}
