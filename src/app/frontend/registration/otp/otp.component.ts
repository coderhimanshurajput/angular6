import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalPath} from '../../../../environments/development';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  otp = new FormControl('', [Validators.required]);

  getErrorMessage() {

    return  this.otp.hasError('required') ? 'This is required' :
    
            '';
  }


  private API_OTP = `${GlobalPath.apiURL}api/otp/verify`;

  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService) { }

  OTP: any = {
    otp_id: this.cookieService.get('otp_code')

  };
  verifyotp() {

    if(this.otp.valid){

    this.httpClient.post<any>(this.API_OTP, this.OTP).subscribe((response) => {
      if (response.response_code === 200) {
        this.cookieService.delete('otp_code');
        this.cookieService.set('token', response.user, 1);
        this.router.navigate(['registration_step1']);
      }


    });
  }
}

  ngOnInit() {
  }

}
