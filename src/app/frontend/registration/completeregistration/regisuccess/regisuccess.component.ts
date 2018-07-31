import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import {GlobalPath} from '../../../../../environments/development';
import { Router } from '@angular/router';
import {FunctionsService} from '../../../../functions.service'

@Component({
  selector: 'app-regisuccess',
  templateUrl: './regisuccess.component.html',
  styleUrls: ['./regisuccess.component.scss']
})
export class RegisuccessComponent implements OnInit {

  private API_UserDetail = `${GlobalPath.apiURL}api/user/details`;

  blankdata:any={}
  username

  constructor(private cookieService:CookieService, 
    private httpClient:HttpClient, 
    private router:Router,
    private functionservices: FunctionsService
  ) { }

  userdetail(){
    if(this.cookieService.get('token')){
    this.httpClient.post<any>(this.API_UserDetail, this.blankdata).subscribe((response)=>{
      this.username=response.user.first_name;
      console.log(response.user.first_name);
     
      
    },(error)=>{
      console.log(error);
    })
  }
  } 

    Callheader(){
      this.functionservices.loggedin(this.cookieService.get('token'));
    }

    productpage(){

      this.router.navigate(['view-products']);
    }

    changetermsconditon(){
      this.functionservices.changeTerms(this.cookieService.get('terms_conditions'));
    }

  ngOnInit() {
    this.Callheader();
    this.userdetail();
    this.changetermsconditon();
  }

}
