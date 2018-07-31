import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import {GlobalPath} from '../environments/development';
import {BehaviorSubject, Observable, of} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  blankdata: any = {};
  isloggedin;
 productcount:any=0;
 termsCondition='false';
 username




 public Total
  private API_Cartlist = `${GlobalPath.apiURL}api/cart/list`;
  constructor(private cookieService:CookieService, private httpClient:HttpClient) { }

  /*Count Cart api */

  private checkedlogin = new BehaviorSubject(this.cookieService.get('token'));
          islogin = this.checkedlogin.asObservable();



  private countcart = new BehaviorSubject(this.productcount);
  cartquantity = this.countcart.asObservable();

  private termsandconditon=new BehaviorSubject(this.termsCondition);
          terms=this.termsandconditon.asObservable();

  /*User Name For display Name*/
  private userInfo=new BehaviorSubject(this.username);
          sendusername=this.userInfo.asObservable();
          
     changeusername(user){
       this.userInfo.next(user);
     }     


    changeTerms(data){
      this.termsandconditon.next(data);
      this.termsCondition=data;

    }          

    changecartquantity(data) {
      this.countcart.next(data);
      this.productcount = data;
    }


  checklogin():Observable<any>
   {
     this.isloggedin = this.cookieService.get('token');
      return of(this.isloggedin);
  }

    loggedin(token) {
      console.log(token);
      this.checkedlogin.next(token);
    }  
}
