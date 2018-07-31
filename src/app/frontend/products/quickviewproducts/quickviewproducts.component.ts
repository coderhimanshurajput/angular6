import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {GlobalPath} from '../../../../environments/development';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {FunctionsService} from '../../../functions.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quickviewproducts',
  templateUrl: './quickviewproducts.component.html',
  styleUrls: ['./quickviewproducts.component.scss']
})
export class QuickviewproductsComponent implements OnInit {
  quantity = new FormControl('', [Validators.required]);
  size= new FormControl('', [Validators.required]);

  getErrorMessage() {

    return  this.quantity.hasError('required') ? 'You must enter a value' :
            '';
  }
  getSizeErrorMessage() {

    return this.size.hasError('required') ? 'This is required' :'';
  }



produtctdetail: any={};
productcount=0;
Size:any=[];
cart: any={
  quantity:1,
  check_out_type:1
};

private API_Productview = `${GlobalPath.apiURL}api/product/details`;
private API_BuyNow=`${GlobalPath.apiURL}api/order/checkout`;
private API_AddCart=`${GlobalPath.apiURL}api/cart/add`;
private API_Cartlist = `${GlobalPath.apiURL}api/cart/list`;


  constructor(private httpClient:HttpClient, 
     private router:Router,
     private toast:ToastrService,
     private ActivatedRoute:ActivatedRoute, 
     private cookieService:CookieService,
     private functionservices:FunctionsService ) { }

 /*----------------------------------------Produt view-------------------------------- */
  productview(){

    this.cart.product_id=this.ActivatedRoute.snapshot.params.productid;
    this.cart.student_id=this.ActivatedRoute.snapshot.params.studentid;

    let view={

                  
      product_id:this.ActivatedRoute.snapshot.params.productid}
      console.log(this.ActivatedRoute.snapshot.params.productid);
    this.httpClient.post<any>(this.API_Productview,view).subscribe((response)=>{
      this.produtctdetail=response.product;
      this.Size=response.product.sizes;
      this.cart.price=response.product.sizes[0].price;
      this.cart.size=response.product.sizes[0].size;

    },(error)=>{
      console.log(error);
    })

  }


 /*----------------------------------------End of Product view------------------------ */
/*-----------------------------------------Product Price------------------------------ */
 getPrice(data){
var a;
  console.log(data);
   console.log(this.Size);
   console.log(this.cart.size);
  this.Size.map(function(r){
    console.log(r.size);
    if(r.size===data){
      console.log(r.price)
      // console.log(this.cart);
      a=r.price;
      console.log(a);
    }
  })
  this.cart.price=a;
  console.log(this.cart);
  
 }
/*-----------------------------------------End of Product Price--------------------------- */

/*-----------------------------------------Buy Now--------------------------------------- */
buynow(){

  this.httpClient.post<any>(this.API_BuyNow,this.cart).subscribe((response)=>{
    console.log(response);
    this.cookieService.set('price',response.order.product.price,1);
    this.cookieService.set('quantity',response.order.product.quantity,1);
    this.cookieService.set('order_id',response.order.order_id,1);
    this.router.navigate(['quick-payment']); 

  },(error)=>{
    console.log(error);
  })
}

/*-----------------------------------------End of Buy Now------------------------------- */

/*-----------------------------------------Add to Cart--------------------------------- */
addCart(){
  
  if(this.cart.quantity<1){
    this.cart.quantity=1
  }

  this.httpClient.post<any>(this.API_AddCart,this.cart).subscribe((response)=>{
  
    this.toast.success("Product Has Been Successfully Saved in Cart");
    this.cartlist();
  },(error)=>{
    console.log(error);
  })
}


/*-----------------------------------------End of Add to Cart------------------------- */
/*-----------------------------------------count cart---------------------------------*/
cartlist(){
  if(this.cookieService.get('token')){
  this.httpClient.post<any>(this.API_Cartlist,{}).subscribe((response)=>{
    console.log(response);

   
      
      // this.productcount=response.cart.length;
      console.log( this.productcount);
      this.functionservices.changecartquantity(response.cart.length);
     
  },(error)=>{
    console.log(error);
  })
}

}
/*-----------------------------------------End of Count Cart-----------------------------*/


ngOnChanges(){
 

}  

ngOnInit() {
    this.productview();

    
  }

}
