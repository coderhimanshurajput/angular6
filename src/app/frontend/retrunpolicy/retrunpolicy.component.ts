import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalPath} from '../../../environments/development'
@Component({
  selector: 'app-retrunpolicy',
  templateUrl: './retrunpolicy.component.html',
  styleUrls: ['./retrunpolicy.component.scss']
})
export class RetrunpolicyComponent implements OnInit {
  private API_ReturnPolicy= `${GlobalPath.apiURL}api/return-policy`;
  myText:any
  constructor(private httpClient:HttpClient) { }

  returnpolicy(){

    this.httpClient.get<any>(this.API_ReturnPolicy).subscribe((response)=>{
      console.log(response);
      this.myText=response;
    },(error)=>{
      console.log(error);
    })
  }

  ngOnInit() {
    this.returnpolicy();
  }

}
