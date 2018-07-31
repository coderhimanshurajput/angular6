import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {GlobalPath} from '../../../../environments/development';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {AuthInterceptor} from '../../../config'
import {FunctionsService} from '../../../functions.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  User: any = {

  };
  username;
  blankdata: any={};
  isloggedin;
  productcount;
  termsandconditon

  private API_Register = `${GlobalPath.apiURL}api/user/register`;
  private API_UserDetail = `${GlobalPath.apiURL}api/user/details`;
  private API_Cartlist = `${GlobalPath.apiURL}api/cart/list`;
  private API_Logout = `${GlobalPath.apiURL}api/auth/logout`;

  email = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('', [Validators.required, Validators.minLength(6)]);

  getErrorMessage() {

    return  this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getpasswordErrorMessage() {

    return this.password.hasError('minlength') ? 'Password should be minimum 6 charcter long':
    this.password.hasError('required') ? 'This is required' :

            '';
  }


  constructor(private httpClient: HttpClient, 
    private cookieService:CookieService,
    private router: Router, 
    private auth:AuthInterceptor, 
    private functionservice:FunctionsService,
    private toast: ToastrService ) { }

/*------------------------------------------Register User-----------------------------------*/
  register() {

    if(this.email.valid && this.password.valid){
            this.httpClient.post<any>(this.API_Register, this.User).subscribe((response)  => {
              console.log(response);

              if (response.response_code === 200) {
                this.router.navigate(['auth_user']);
                this.cookieService.set('otp_code', response.otp_id, 1/8);
                this.cookieService.set('useremail',this.User.email);
                this.toast.success("You you've Succcessfully Registered");
              }
            },(error)=>{
              this.toast.error("Already Register");
            });
        }
      }
/*--------------------------------------End of Register User----------------------------- */

      userdetail(){
        if(this.cookieService.get('token')){
        this.httpClient.post<any>(this.API_UserDetail, this.blankdata).subscribe((response)=>{

          this.functionservice.changeusername(response.user.first_name);


        },(error)=>{
          console.log(error);
        })
      }
      }

      /*------------------------------------Count Cart-------------------------------------- */
          cartlist(){
            if(this.cookieService.get('token')){
            this.httpClient.post<any>(this.API_Cartlist,this.blankdata).subscribe((response)=>{
              console.log(response);



                // this.productcount=response.cart.length;
                console.log( this.productcount);
               

                this.functionservice.changecartquantity(response.cart.length);

            },(error)=>{
              console.log(error);
            })
          }

          }

      /*------------------------------------End of Count Cart-------------------------------*/

      /*------------------------------------Logout--------------------------------------- */
          logout() {
            // this.httpClient.post<any>(this.API_Logout, this.blankdata).subscribe((response)=>{
              this.cookieService.delete('token');
              this.cookieService.delete('terms_conditions');
              this.router.navigate(['']);
              this.updatelogin();
            // },(error)=>{
            //   console.log(error);
            // })
          }

      /*------------------------------------End of Logout------------------------------- */
      /*------------------------------------Header calling -----------------------------*/
         /*User Information*/

         usernameinfo(){
           this.functionservice.sendusername.subscribe(name=>{
            this.username=name;

           })
         }
          

         /*End of User Information*/ 

            islogin() {
              this.functionservice.islogin.subscribe(token => {
                console.log(token);
                this.isloggedin = token;
              });

            }


            updatelogin() {
              this.functionservice.loggedin(this.cookieService.get('token'));
            }

      /*------------------------------------End of Header calling----------------------*/
            checktermsconditon(){

              this.functionservice.terms.subscribe(terms=>{
                console.log(terms);
                this.termsandconditon=terms;
                console.log(typeof(this.termsandconditon));
              })

            }
            changetermsconditon(){
              this.functionservice.changeTerms(this.cookieService.get('terms_conditions'));
            }

  ngOnInit() {

    this.functionservice.cartquantity.subscribe(totalqty => {
      console.log(totalqty);
      this.productcount = totalqty;
    });


    this.userdetail();
    this.cartlist();
    this.islogin();
    this.checktermsconditon();
    this.changetermsconditon();
    this.usernameinfo();
  }

}
