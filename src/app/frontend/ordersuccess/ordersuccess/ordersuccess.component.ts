import { Component, OnInit } from '@angular/core';
import {GlobalPath} from '../../../../environments/development'
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.scss']
})
export class OrdersuccessComponent implements OnInit {
  data:any={}
  userdata:any={}
  orderid;
  private API_UserDetail = `${GlobalPath.apiURL}api/user/details`;
  constructor(private httpClient:HttpClient, private cookieService:CookieService,
  private router:Router) { }

  userdetail(){
    this.httpClient.post<any>(this.API_UserDetail, this.data).subscribe((response)=>{
      console.log(response)
      this.orderid=this.cookieService.get('order_id').slice(-5);
      this.userdata=response.user;
      
    },(error)=>{
      console.log(error);
    })
  }
  /***************************************Track Order--------------------------------------- */
  trackorder(){
    this.router.navigate(['orderhistory']);
  }
  /*--------------------------------------End of Track Order------------------------------- */
  /*-------------------------------------Continue Shopping-------------------------------- */
  continueshoping(){
    this.router.navigate(['view-products']);
  }

  /*-------------------------------------End of Continue Shopping ----------------------- */

  ngOnInit() {
    this.userdetail();
  }

}
