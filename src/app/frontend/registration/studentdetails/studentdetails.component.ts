import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalPath } from './../../../../environments/development';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {FunctionsService} from '../../../functions.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {

  name =new FormControl('',[Validators.required]);
  schoolname=new FormControl('', [Validators.required]);
  housename=new FormControl('',[Validators.required]);
  classname=new FormControl('',[Validators.required]);
  gender=new FormControl('', [Validators.required]);

  getnameErrorMessage(){
    return this.name.hasError('required')?'This is required':'';
  }

  getschoolnameErrorMessage(){

    return this.schoolname.hasError('required')? 'This is required':'';

  }

  gethousenameErrorMessage(){
    return this.housename.hasError('required')? 'This is required':'';
  }

  getclassnameErrorMessage(){
    return this.classname.hasError('required')? 'This is required':'';
  }

  getgenderErrorMessage(){
    return this.gender.hasError('required')?'This is required':'';
  }
  register2: any = {

  };

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



  private API_Class = `${GlobalPath.apiURL}api/class/list`;
  private API_School = `${GlobalPath.apiURL}api/school/list`;
  private API_House= `${GlobalPath.apiURL}api/school/house`;
  private API_SaveStudent=`${GlobalPath.apiURL}api/user/register/student`;
  private API_Studentlist = `${GlobalPath.apiURL}api/student/list`;

  constructor(private  httpClient: HttpClient, 
    private router: Router,
    private toast:ToastrService,
    private functionservices:FunctionsService,
    private cookieService:CookieService
  ) { }

  classlist = [];
  schoollist: {};
  houselist = [];
  schooldetail=[];

  schooldata() {

    this.httpClient.get<any>(this.API_School).subscribe((response) => {

        console.log(response);
        this.schoollist = response.school;
        console.log(this.schoollist);
    });

  }

  housedata() {

   
      this.httpClient.post<any>(this.API_House, this.register2).subscribe((response) => {
          this.houselist = response.house;

        
          console.log(response);
          console.log(this.houselist);

      });
  }

  classdata() {

    this.httpClient.get<any>(this.API_Class).subscribe((response) => {

      console.log(response.class.length);
      // console.log(response.class[].name);

      for (let i = 0; i <= response.class.length - 1; i++) {

        this.classlist.push(response.class[i].name);

        // console.log(this.classlist);

      }
    });

  }
    savestudentdetail(register2) {
      console.log(this.register2.valid);
      if(this.name.valid && this.housename.valid && this.classname.valid && this.schoolname.valid && this.gender.valid){

        this.httpClient.post<any>(this.API_SaveStudent, this.register2).subscribe((response) => {

            console.log(response);
            if (response.response_code === 200) {

                this.toast.success("Student Has Been Successfully Saved")
                this.router.navigate(['registration_step3']);

            }

        });

        console.log(this.register2);

    }
  }

  /*---------------------------------Student Detail--------------------------------------------*/
  studentlist() {
       
    this.httpClient.post<any>(this.API_Studentlist, {}).subscribe((response) => {
      this.schooldetail = response.students;
      console.log(response);
      console.log(response.students);
      console.log(this.schooldetail);
    });
  }
/*-----------------------------------End of Student Detail--------------------------------------*/ 
Callheader(){
  this.functionservices.loggedin(this.cookieService.get('token'));
}



  ngOnInit() {
    this.classdata();
    this.schooldata();
    this.studentlist();
  }
}
