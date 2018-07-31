import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalPath} from '../../../../environments/development';
import { Router } from '@angular/router';
import { FunctionsService } from '../../../functions.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
 
  studentdata = [];
  product: any={};
  list: any = {};
  productdata=[];
  private API_Studentlist = `${GlobalPath.apiURL}api/student/list`;
  private API_Productlist = `${GlobalPath.apiURL}api/product/list`;
  private API_UserDetail = `${GlobalPath.apiURL}api/user/details`;

  constructor(private httpClient: HttpClient, 
    private router:Router,
    private functionservices: FunctionsService,
    private cookieService: CookieService) { }

  studentlist() {
       
    this.httpClient.post<any>(this.API_Studentlist, this.list).subscribe((response) => {
      this.studentdata = response.students;
      console.log(response.students);
     
    });
  }

  /*-------------------------------------------Product List -----------------------------------------------------------*/

  productlist(){
      this.httpClient.post<any>(this.API_Productlist, this.product).subscribe((response)=>{

        console.log(response);
        this.productdata=response.products;
        console.log(this.productdata);

      })
  }


  /*-------------------------------------------End of Product List -------------------------------------------------- */
  /*-------------------------------------------/Quick view page link---------------------------------- */
  
  quickview(productid, studentid){
    console.log("check"+ productid+ studentid);
    this.router.navigate(['quick-view-product/'+productid+'/'+studentid]);
   
}
  /*-------------------------------------------/End of Quick view page link---------------------------------- */
 
  changetermsconditon(){
    this.functionservices.changeTerms(this.cookieService.get('terms_conditions'));
  }
  /*User Information */

  /*User Information*/

  userdetail(){
    if(this.cookieService.get('token')){
    this.httpClient.post<any>(this.API_UserDetail,{}).subscribe((response)=>{

      this.functionservices.changeusername(response.user.first_name);


    },(error)=>{
      console.log(error);
    })
  }
  }

  /*End of User Information*/ 
 
  ngOnInit() {
    this.studentlist();
    this.changetermsconditon();
    this.userdetail();

  }

}
