import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalPath} from '../../../environments/development';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss']
})
export class PrivacypolicyComponent implements OnInit {
  private API_PrivacyPolicy = `${GlobalPath.apiURL}api/privacy`;
  myText
  constructor(private httpClient:HttpClient) { }

  Policy(){
  
    this.httpClient.get<any>(this.API_PrivacyPolicy).subscribe((response)=>{
      console.log(response);
      this.myText=response;
    },(error)=>{
      console.log(error);
    })
  }
  // history.pushState(null,null,location.href)
  // window.onpopstate = function(){
  // history.go(1);}

  ngOnInit() {
    this.Policy();
  }

}
