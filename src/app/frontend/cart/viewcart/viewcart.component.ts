import { Component, OnInit } from '@angular/core';
import {GlobalPath} from '../../../../environments/development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { FunctionsService } from '../../../functions.service';


@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {
  private API_Call = `${GlobalPath.apiURL}api/cart/list`;
  private API_RemoveProduct = `${GlobalPath.apiURL}api/cart/remove`;
  private API_UpdateQuantity = `${GlobalPath.apiURL}api/cart/update/quantity`;
  private API_Checkout = `${GlobalPath.apiURL}api/order/checkout`;

  list: any={}
  product:any=[];
  productlist:any=[];
  removecart:any={};
  productquantity:any={};
  checkoutlist:any={
    check_out_type:2
  }

  Total: any=0;
  VAT : any=0;

  constructor(private httpClient:HttpClient, private router:Router,
    private cookieService:CookieService, private toast:ToastrService,
    private functionservices:FunctionsService) { }

  cartlist() {

    this.httpClient.post<any>(this.API_Call,this.list).subscribe((response)=>{
      console.log(response);
      this.product = response;
      console.log(this.product);
      this.productlist=[];
      this.Total=0;
      this.VAT=0;
      this.functionservices.changecartquantity(response.cart.length);
      for(var i=0; i<=this.product.cart.length-1; i++ ){

        console.log(this.product.cart[i]);
        console.log(this.productlist);


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

  /*---------------------------------------------------Remove Cart-------------------------------------------------------- */

  removeproduct(_id){
    this.removecart={
      cart_id:_id

    }  
      
    if(window.confirm(" Would you really want to delete the product ")) {

    this.httpClient.post<any>(this.API_RemoveProduct, this.removecart).subscribe((response)=>{
      console.log(response);
      this.toast.success("Product Has Been Removed Successfully");
      this.cartlist();

    },(error)=>{
      console.log(error);
    })
  }
  }

  /*---------------------------------------------------End of Remove Cart------------------------------------------------ */

  /*---------------------------------------------------Update cart quantity--------------------------------------------- */

    update_qty(event,_id){
      setTimeout(() => {


      this.productquantity={
        cart_id:_id,
        quantity:event.target.value

      }
          if(this.productquantity.quantity <1){
            this.productquantity.quantity=1;
          }

       console.log(event.target.value);
       console.log(_id);

      this.httpClient.post<any>(this.API_UpdateQuantity, this.productquantity).subscribe((response)=>{

        console.log(response);
        this.cartlist();
      },(error)=>{
        console.log(error);
      })

    }, 200);
    }


  /*---------------------------------------------------End of Update cart quantity-------------------------------------- */

  /*---------------------------------------------------Continue Shopping----------------------------------------------- */

    ContinueShopping() {
      this.router.navigate(['view-products']);

    }

  /*---------------------------------------------------End of Continue Shopping--------------------------------------- */

 /*----------------------------------------------------Checkout----------------------------------------- */

    checkout() {


    // this.functionservices.cartquantity.subscribe(count => {
    //     console.log(count);
        if(this.functionservices.productcount<1) {
          this.toast.warning("Cart is Empty");

        }
        else{
          this.httpClient.post<any>(this.API_Checkout,this.checkoutlist).subscribe((response)=>{
            console.log(response);

            this.cookieService.set('order_id',response.order.order_id);
            this.cookieService.set('product', response.order.product);

            this.router.navigate(['payment']);

          },(error)=>{
            console.log(error);
          })

        }
      // });

    }

/*-----------------------------------------------------End of Checkout----------------------------------*/

  ngOnInit() {

    this.cartlist();
  }

}
