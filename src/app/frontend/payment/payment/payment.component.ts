import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { GlobalPath } from './../../../../environments/development';
import { Router } from '@angular/router';
import { FunctionsService } from '../../../functions.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  data:any={};
  register1:any={};
  product:any=[];
  productlist:any=[];
  Total: any=0;
  VAT : any=0;
  orderdetail: any={

    payment_mode:"1",
    order_id:this.cookieService.get("order_id")

}
  private API_CartList = `${GlobalPath.apiURL}api/cart/list`;  
  private API_UserDetail = `${GlobalPath.apiURL}api/user/details`;
  private API_ConfirmOrder= `${GlobalPath.apiURL}api/order/confirm`;

  constructor(private httpClient:HttpClient, 
    private cookieService:CookieService,
    private router:Router,
    private functionservices: FunctionsService) { }

 /*------------------------------------Cart List-------------------------------------------------*/
 cartlist(){
    
  this.httpClient.post(this.API_CartList,this.data).subscribe((response)=>{
    console.log(response);
    this.product=response;
    console.log(this.product.cart[0].product);

    for(var i=0; i<=this.product.cart.length-1; i++ ){

      console.log(this.product.cart[i]);
      this.productlist.push(this.product.cart[i]);
    
      console.log(this.productlist);
      this.Total=this.Total+(this.product.cart[i].product.price*this.product.cart[i].product.quantity);
     

    }

    this.VAT=this.VAT+this.Total*5/100;
    console.log(this.VAT);
    console.log(this.Total);
    

  },(error)=>{
    console.log(error);
  })
}
 /*------------------------------------End of cart List------------------------------------------*/ 
/*-------------------------------------User Detail---------------------------------------------- */
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
 /*------------------------------------End of User Detail----------------------------------------*/
 /*----------------------------------------Confirm Order ---------------------------------------------- */
 

confirmOrder(){

  this.orderdetail.address=this.register1.address;
  this.orderdetail.pin_code=this.register1.pin_code;
console.log(this.register1);
console.log(this.orderdetail);
this.httpClient.post<any>(this.API_ConfirmOrder, this.orderdetail).subscribe((response)=>{
  this.router.navigate(['success']);
  this.cartcount();
  console.log(response);
},(error)=>{
  console.log(error);
})
}

/*----------------------------------------End of Confirm Order --------------------------------------- */

cartcount(){
  if(this.cookieService.get('token')) {
  this.httpClient.post<any>(this.API_CartList,{}).subscribe((response)=>{
    console.log(response);
      // this.productcount=response.cart.length;

      this.functionservices.changecartquantity(response.cart.length);

  },(error)=>{
    console.log(error);
  })
}

}
  ngOnInit() {
    this.userdetail();
    this.cartlist();
  }

}
