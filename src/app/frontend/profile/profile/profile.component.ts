import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalPath} from '../../../../environments/development';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data: any={}
  User:any ={}
  userdata:any={}
  addstudent:any={}
  studentlist:any=[];
  school:any=[];
  class:any=[];
  house:any=[];
  house2:any=[];
  delete:any={}
  singlestudent:any={}
  studentinfo:any={}

  email = new FormControl('', [Validators.required, Validators.email]);
  phone_number= new FormControl('', [Validators.required]);
  address=new FormControl('',[Validators.required]);
  first_name=new FormControl('',[Validators.required]);
  last_name=new FormControl('',[Validators.required]);
  pin_code=new FormControl('',[Validators.required]);
  

  getErrorMessage() {

    return  this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  getmobileErrorMessage() {

    return this.phone_number.hasError('required') ? 'This is required':'';
  }
  getfirst_nameErrorMessage() {

    return this.first_name.hasError('required') ? 'This is required':'';
  }
  getlast_nameErrorMessage() {

    return this.last_name.hasError('required') ? 'This is required':'';
  }
  getaddressErrorMessage() {

    return this.address.hasError('required') ? 'This is required':'';
  }
  getpin_codeErrorMessage() {

    return this.pin_code.hasError('required') ? 'This is required':'';
  }

  password=new FormControl('',[Validators.required]);
  newpassword=new FormControl('',[Validators.required, Validators.minLength(6)]);

  getpasswordErrorMessage() {

    return this.password.hasError('required') ? 'This is required':'';
  }
  getnewpasswordErrorMessage() {

    return this.newpassword.hasError('required') ? 'This is required':this.newpassword.hasError('minlength')?'Password should be minimum 6 character long':'';
  }


  studentname = new FormControl('', [Validators.required, Validators.email]);
  schoolname= new FormControl('', [Validators.required]);
  classname=new FormControl('',[Validators.required]);
  housename=new FormControl('',[Validators.required]);
  gender=new FormControl('',[Validators.required]);

  getstudentnameErrorMessage() {

    return this.studentname.hasError('required') ? 'This is required':'';
  }
  getschoolnameErrorMessage() {

    return this.schoolname.hasError('required') ? 'This is required':'';
  }
  getclassnameErrorMessage() {

    return this.classname.hasError('required') ? 'This is required':'';
  }
  gethousenameErrorMessage() {
    

    return this.housename.hasError('required') ? 'This is required':'';
  }
  getgenderErrorMessage() {

    return this.gender.hasError('required') ? 'This is required':'';
  }

  name= new FormControl(['', Validators.required]);
  schoolinfo=new FormControl(['',Validators.required]);
  classinfo=new FormControl(['',Validators.required]);
  houseinfo=new FormControl(['',Validators.required]);
  genderinfo=new FormControl(['',Validators.required]);

  getnameErrorMessage(){
    return this.name.hasError('required')? 'This is required':'';
  }


  getschoolinfoErrorMessage(){
    return this.schoolinfo.hasError('required')? 'This is required':'';
  }
 getclassinfoErrorMessage(){
    return this.classinfo.hasError('required')? 'This is required':'';
  }
  gethouseinfoErrorMessage(){
    return this.houseinfo.hasError('required')? 'This is required':'';
  }
  getgenderinfoErrorMessage(){
    return this.genderinfo.hasError('required')? 'This is required':'';
  }
  

  private API_UserDetail = `${GlobalPath.apiURL}api/user/details`;
  private API_StudentDetail = `${GlobalPath.apiURL}api/student/list`;
  private API_UpdateUserDetail = `${GlobalPath.apiURL}api/user/update`;
  private API_Updatepassword = `${GlobalPath.apiURL}api/auth/update/password`;
  private API_Schoollist = `${GlobalPath.apiURL}api/school/list`;
  private API_Classlist = `${GlobalPath.apiURL}api/class/list`;
  private API_Houselist = `${GlobalPath.apiURL}api/school/house`;
  private API_AddStudent = `${GlobalPath.apiURL}api/user/register/student`;
  private API_RemoveStudent = `${GlobalPath.apiURL}api/student/delete`;
  private API_SingleStudent = `${GlobalPath.apiURL}api/student/details`;
  private API_UpdateStudentDetail= `${GlobalPath.apiURL}api/student/update`;
  constructor(private httpClient:HttpClient) { }
/*-------------------------------------User Detail---------------------------------------------- */
  userdetail(){
    this.httpClient.post<any>(this.API_UserDetail, this.data).subscribe((response)=>{
      console.log(response)
      
      this.userdata=response.user;
      this.userdata.pin_code=response.user.address.pin_code;
      this.userdata.address=response.user.address.address;
      console.log(this.userdata);
    },(error)=>{
      console.log(error);
    })
  }
 /*------------------------------------End of User Detail----------------------------------------*/
 /*-------------------------------------User Detail---------------------------------------------- */
 studentdetail(){
  this.httpClient.post<any>(this.API_StudentDetail, this.data).subscribe((response)=>{
    console.log(response);  
    this.studentlist=response.students;
    
    console.log(this.studentlist);
  },(error)=>{
    console.log(error);
  })
}
/*------------------------------------End of User Detail----------------------------------------*/
/*-------------------------------------Update User Detail---------------------------------------------- */


updateuserdetail(){
this.userdata={
  address:this.userdata.address,
  pin_code:this.userdata.pin_code,
  first_name:this.userdata.first_name,
  last_name:this.userdata.last_name,
  phone_number:this.userdata.phone_number,
  email:this.userdata.email
}
    console.log(this.userdata)

    this.httpClient.post<any>(this.API_UpdateUserDetail, this.userdata).subscribe((response)=>{
      console.log(response);     
      this.userdetail();
    },(error)=>{
      console.log(error);
    })
  }
/*------------------------------------End of Update User Detail----------------------------------------*/
/*----------------------------------------update Password---------------------------------------------------*/

    updatepassword(){

      if(this.password.valid && this.newpassword.valid){
       this.httpClient.post(this.API_Updatepassword, this.User).subscribe((response)=>{
        console.log(response);
       },(error)=>{
         console.log(error);
       })
     }
    }
        
  

/*----------------------------------------End of Update Password-------------------------------------------*/
 /*----------------------------------------List of School-----------------------------------------------------*/


      schoollist(){
        
        this.httpClient.get<any>(this.API_Schoollist).subscribe((response)=>{
          this.school=response.school;
          console.log(this.school);
        },(error)=>{
          console.log(error);
        })
      }
/*----------------------------------------End of School List---------------------------------------------------------*/
/*-------------------------------------------------------Class List------------------------------------------------- */

        classlist(){
          this.httpClient.get<any>(this.API_Classlist).subscribe((response)=>{
            console.log(response);
            this.class=response.class;
            console.log(this.class);
          },(error)=>{
            console.log(error);
          })
        }

/*-------------------------------------------------------End of Class List----------------------------------------- */
  /*----------------------------------------House List---------------------------------------------------------*/

  houselist(){
    this.httpClient.post(this.API_Houselist,this.addstudent).subscribe((response)=>{
  
      this.house=response;
    },(error)=>{

      console.log(error);
    })
  }




/*----------------------------------------End of House List--------------------------------------------------*/

/*---------------------------------------------------Add Students--------------------------------------------------------- */
  addStudent(){

    // if(this.studentname.valid && this.schoolname.valid && this.classname.valid && this.housename.valid && this.gender.valid){
    this.httpClient.post<any>(this.API_AddStudent,this.addstudent).subscribe((response)=>{
      console.log(response);
      this.studentdetail();
    },(error)=>{
      console.log(error);
    })
    // }
  }
/*---------------------------------------------------End Add More Students----------------------------------------------- */
/*---------------------------------------------------Remove Student----------------------------------------------------- */

    removeStudent(id){
      
      console.log(id);
     this.delete={
      student_id:id
      }
      if (window.confirm("Would you really want to delete the student")) {
      this.httpClient.post(this.API_RemoveStudent,this.delete).subscribe((response)=>{
        console.log(response);
        this.studentdetail();
      },(error)=>{
        console.log(error);
      })
    }
    }

/*---------------------------------------------------End of Remove Student--------------------------------------------- */
/*----------------------------------------GET Single Student ------------------------------------------------*/

    getsinglestudent(id){

      this.singlestudent={
        student_id:id
      }
      this.httpClient.post<any>(this.API_SingleStudent, this.singlestudent).subscribe((response)=>{
        console.log(response);
        this.studentinfo=response.student;
        const school_id={
          school_id:response.student.school_id
  
          };

          this.httpClient.post<any>(this.API_Houselist, school_id).subscribe((response)=>{
            console.log(response);
            this.house=response.house;
          },(error)=>{
            console.log(error);
          })
      },(error)=>{
        console.log(error);
      })
    }

/*----------------------------------------End of GET Single Student------------------------------------------*/
/*----------------------------------------house list for updation-------------------------------------------*/
    houselist2(id){

      const school_id={
        school_id:id

        };

        console.log(school_id);

        this.httpClient.post<any>(this.API_Houselist,school_id).subscribe((response)=>{
          console.log(response);
          this.house2=response.house;
        },(error)=>{
          console.log(error);
        })

    }

/*----------------------------------------End of house list for updation-----------------------------------*/

/*----------------------------------------Edit Student Detail-------------------------------------------------*/
editstudentdetail(){

  const studentupdatedetail={
    student_name:this.studentinfo.name,
    student_gender:this.studentinfo.gender,
    student_school_id:this.studentinfo.school_id,
    student_house:this.studentinfo.house,
    student_class:this.studentinfo.class,
    student_id:this.studentinfo._id

  }
  console.log(studentupdatedetail);


  this.httpClient.post<any>(this.API_UpdateStudentDetail,studentupdatedetail).subscribe((response)=>{
    console.log(response);
    this.studentdetail();
  },(error)=>{
    console.log(error);
  })
  
  console.log(this.singlestudent);
}

/*----------------------------------------End of Edit Student Detail-----------------------------------------*/

  ngOnInit() {

    this.userdetail();
    this.studentdetail();
    this.schoollist();
    this.classlist();
  }

}