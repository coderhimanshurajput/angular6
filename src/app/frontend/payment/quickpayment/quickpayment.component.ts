import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GlobalPath } from './../../../../environments/development';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quickpayment',
  templateUrl: './quickpayment.component.html',
  styleUrls: ['./quickpayment.component.scss']
})
export class QuickpaymentComponent implements OnInit {
  private API_UserDetail = `${GlobalPath.apiURL}api/user/details`;
  private API_ConfirmOrder= `${GlobalPath.apiURL}api/order/confirm`;

  register1: any={}
  Total:any={}
  qty:any={}
  price:any={}
  Taxamount:any={}
  data:any={}
    
  orderdetail: any={

    payment_mode:"1",
    order_id:this.cookieService.get("order_id")

}
  constructor(private httpClient:HttpClient, private cookieService:CookieService,
  private router:Router) { }

  userdetail(){
    this.httpClient.post<any>(this.API_UserDetail, this.data).subscribe((response)=>{
      console.log(response)
      
      this.register1=response.user;
      this.register1.pin_code=response.user.address.pin_code;
      this.register1.address=response.user.address.address;
      
    },(error)=>{
      console.log(error);
    })
  }

  /*--------------------------------------Total Price-------------------------------------------------- */

//   $scope.cartlist=function(){

//     $scope.usercart={

//         user:localStorageService.cookie.get("user")

//     }

  
//             var Total=0
//           Total=Total+(localStorageService.cookie.get("quantity")*localStorageService.cookie.get("price"));
//                   return $scope.sum = Total, $scope.taxamount = Total * 5 / 100;
       


// }

// $scope.cartlist();

cartlist(){
  
  this.qty = this.cookieService.get("quantity");
  this.price=this.cookieService.get("price");
  this.Total=0+this.qty*this.price;
  this.Taxamount=this.Total*5/100;
  console.log(this.Total);
 console.log(this.cookieService.get("quantity"));

  }
  /*--------------------------------------End of Total Price------------------------------------------ */
/*----------------------------------------Confirm Order ---------------------------------------------- */
// $scope.confirmOrder = function() {

confirmOrder(){

  this.orderdetail.address=this.register1.address;
  this.orderdetail.pin_code=this.register1.pin_code;
  this.httpClient.post<any>(this.API_ConfirmOrder, this.orderdetail).subscribe((response)=>{

    console.log(response);
    this.cookieService.delete('quantity');
    this.cookieService.delete('price')
    this.router.navigate(['success'])
  },(error)=>{
    console.log(error);
  })
}

/*----------------------------------------End of Confirm Order --------------------------------------- */
  ngOnInit() {
    this.userdetail();
    this.cartlist();
  }

}
