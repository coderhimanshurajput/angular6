import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalPath } from './../../../../environments/development';
import { FormControl, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import { FunctionsService } from '../../../functions.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-finalregistration',
  templateUrl: './finalregistration.component.html',
  styleUrls: ['./finalregistration.component.scss']
})
export class FinalregistrationComponent implements OnInit {

    list: any = {};
    studentdata = [];
    singlestudent: any={};
    parentdata: any = {};
    editparentdetail: any={};
    classlist=[];
    schooldata=[];
    housedata=[];


    checkbox=new FormControl(['',[Validators.required]]);
    getcheckboxError(){
      return this.checkbox.hasError('required')?'You have to agree first':'';
    }


  private API_Studentlist = `${GlobalPath.apiURL}api/student/list`;
  private API_remove = `${GlobalPath.apiURL}api/student/delete`;
  private API_PartentDetail = `${GlobalPath.apiURL}api/user/details`;
  private API_EditUserDetail = `${GlobalPath.apiURL}api/user/update`;
  private API_SingleStudentData=`${GlobalPath.apiURL}api/student/details`;
  private API_Class = `${GlobalPath.apiURL}api/class/list`;
  private API_School = `${GlobalPath.apiURL}api/school/list`;
  private API_House= `${GlobalPath.apiURL}api/school/house`;
  private API_UpdateStudentDetail= `${GlobalPath.apiURL}api/student/update`;
  private API_TermsAndCondition= `${GlobalPath.apiURL}api/user/register/terms`;
  
  constructor(private httpClient: HttpClient, 
    private router: Router, 
    private toast: ToastrService,
    private functionservices: FunctionsService,
    private cookieService: CookieService) { }

    parentDetail() {
        this.httpClient.post<any>(this.API_PartentDetail, this.list).subscribe((response) => {
          this.parentdata = response;
         
        });
    }
      /*Parent detail for poup box */
    parentDetail2() {
      this.httpClient.post<any>(this.API_PartentDetail, this.list).subscribe((response) => {
        this.editparentdetail=response.user;
        this.editparentdetail.pin_code=response.user.address.pin_code;
        this.editparentdetail.address=response.user.address.address;
        
        
         console.log(response.user.address);
      });
  }

  /*---------------------------------Student Detail--------------------------------------------*/
    studentlist() {
       
      this.httpClient.post<any>(this.API_Studentlist, this.list).subscribe((response) => {
        this.studentdata = response.students;
        console.log(response.students);
        console.log(this.studentdata);
      });
    }
/*-----------------------------------End of Student Detail--------------------------------------*/ 
/*-----------------------------------Remove Student-------------------------------------------- */
    removestudent(_id) {
      console.log(_id);
      const student_id={student_id: _id};
      if (window.confirm("Would you really want to delete the student")) {
      this.httpClient.post<any>(this.API_remove, student_id).subscribe((response)=>{
        console.log(response);
        if (response.response_code === 200){
          this.toast.success("Student Has Been Successfully Removed")
          this.studentlist();
        }
      });
    }
  }
/*----------------------------------End of Remove Student------------------------------------*/
/*----------------------------------Edit User Detail------------------------------------ */
edituserdetail(){
      
      this.httpClient.post<any>(this.API_EditUserDetail, this.editparentdetail).subscribe((response)=>{
        console.log(response);
        this.parentDetail();
        this.toast.success("User Detail successfully Edited");
      },(error)=>{
        console.log(error);
      })
    }
 /*--------------------------------End of User Detail ---------------------------------------*/   
 /*------------------------------List of Single Student----------------------------------*/
      singlestudentdata(_id){

       const studentid={
        student_id:_id

        };
        this.httpClient.post<any>(this.API_SingleStudentData,studentid).subscribe((response)=>{
          console.log(response);
          this.singlestudent=response.student;
          const school_id={
            school_id:response.student.school_id
    
            };
          this.httpClient.post<any>(this.API_House, school_id).subscribe((response)=>{
          
            this.housedata=response.house;
            console.log(this.housedata);
          })
          
        })
      }

    /*------------------------------End of Single Student API------------------------------*/
    /*----------------------------------------Edit Student Detail-------------------------------------------------*/
    editstudentdetail(){

      const studentupdatedetail={
        student_name:this.singlestudent.name,
        student_gender:this.singlestudent.gender,
        student_school_id:this.singlestudent.school_id,
        student_house:this.singlestudent.house,
        student_class:this.singlestudent.class,
        student_id:this.singlestudent._id

      }
      console.log(studentupdatedetail);


      this.httpClient.post<any>(this.API_UpdateStudentDetail,studentupdatedetail).subscribe((response)=>{
        console.log(response);
        this.toast.success("Student Detail successfully Edited");
        this.studentlist();
      },(error)=>{
        console.log(error);
      })
      
      console.log(this.singlestudent);
    }

/*----------------------------------------End of Edit Student Detail-----------------------------------------*/
    /*------------------------------House List--------------------------------------------*/
      houselist(){

        this.httpClient.post<any>(this.API_House, this.singlestudent).subscribe((response)=>{
          
          this.housedata=response.house;
          console.log(this.housedata);
        })

      }

    /*------------------------------End of House List------------------------------------*/
    /*------------------------------Class List------------------------------------------*/
    classdata() {

      this.httpClient.get<any>(this.API_Class).subscribe((response) => {
  
        
        this.classlist=response.class;
        console.log(this.classlist);        
      });
  
    }
    /*------------------------------End of Class List------------------------------------*/  
    /*------------------------------list of School--------------------------------------*/
    schoollist() {

      this.httpClient.get<any>(this.API_School).subscribe((response) => {
  
          console.log(response);
          this.schooldata = response.school;
          console.log(this.schooldata);
      });
  
    }
  
  /*------------------------------End of School List---------------------------------*/


  /*------------------------------Accept Terms And Condition------------------------*/
        accepttermsandcondition(){

          console.log(this.list.check);

        
          if(this.list.check===true){
            this.httpClient.post<any>(this.API_TermsAndCondition,this.list).subscribe((response)=>{
              console.log(response);
              this.cookieService.set('terms_conditions', 'true');
              this.router.navigate(['regissuccess']);
              this.changetermsconditon();
            },(error)=>{
              console.log(error);
            })
          }else{
            alert('please check the terms and conditions');
          }
        }
       
            
        
      
  /*------------------------------End of Accept Terms And Condition-----------------*/

 /*-------------------------------- Add More Child-------------------------------------*/   
    Addchild(){
      this.router.navigate(['registration_step2']);
    }

 /*---------------------------------End of Add More Child----------------------------*/

 Callheader(){
  this.functionservices.loggedin(this.cookieService.get('token'));
}

changetermsconditon(){
  this.functionservices.changeTerms(this.cookieService.get('terms_conditions'));
}

  ngOnInit() {
    this.studentlist(); 
    this.parentDetail();
    this.classdata();
    this.schoollist();
    this.Callheader();
  }

}