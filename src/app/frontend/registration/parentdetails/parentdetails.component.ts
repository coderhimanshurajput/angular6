import { GlobalPath } from './../../../../environments/development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FunctionsService } from '../../../functions.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-parentdetails',
  templateUrl: './parentdetails.component.html',
  styleUrls: ['./parentdetails.component.scss']
})
export class ParentdetailsComponent implements OnInit {

  firstname = new FormControl('', [Validators.required]);
  lastname= new FormControl('', [Validators.required]);
  Mobile= new FormControl('', [Validators.required]);
  Address= new FormControl('', [Validators.required]);
  pin= new FormControl('', [Validators.required]);

  getErrorMessage() {

    return  this.firstname.hasError('required') ? 'This is required' :'';
  }
  getMobileMessage() {

    return  this.Mobile.hasError('required') ? 'This is required' :'';
  }
  getAddressMessage() {

    return  this.Address.hasError('required') ? 'This is required' :'';
  }
  getpinMessage() {

    return  this.pin.hasError('required') ? 'This is required' :'';
  }
  getlastnameMessage() {

    return  this.lastname.hasError('required') ? 'This is required' :'';
  }


  private API_ParentDetail = `${GlobalPath.apiURL}api/user/register/profile`;
  private API_UserDetail = `${GlobalPath.apiURL}api/user/details`;


  constructor(private httpclient: HttpClient,
    private router: Router,
    private functionservices:FunctionsService,
    private cookieService: CookieService ) { }
  register1: any = {

  };
  Userdetail() {
    this.httpclient.post<any>(this.API_UserDetail, this.register1).subscribe((response) => {
      console.log(response);
      this.register1.email = response.user.email;
    });

  }



  parentdetail() {
    if(this.firstname.valid && this.lastname.valid && this.pin.valid && this.Mobile.valid && this.Address.valid){

    this.httpclient.post<any>(this.API_ParentDetail, this.register1).subscribe((response)=> {

      console.log(response);
      if (response.response_code === 200) {

        this.router.navigate(['registration_step2']);
      }

    });
    }
  }

  // log(x) {
  //   console.log(x);
  // }

  Callheader(){
    this.functionservices.loggedin(this.cookieService.get('token'));
  }
  ngOnInit() {

    this.Userdetail();
    this.Callheader();
  }
}


