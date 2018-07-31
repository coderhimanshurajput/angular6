import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalPath} from '../../../environments/development'

@Component({
  selector: 'app-termsconditions',
  templateUrl: './termsconditions.component.html',
  styleUrls: ['./termsconditions.component.scss']
})
export class TermsconditionsComponent implements OnInit {
  private API_Terms = `${GlobalPath.apiURL}api/terms`;
  terms:any
  constructor(private httpClient:HttpClient) { }

  termsandcodition(){

    this.httpClient.get<any>(this.API_Terms).subscribe((response)=>{
      console.log(response);
      this.terms=response;
    },(error)=>{
      console.log(error);
    })
  }

  ngOnInit() {
    this.termsandcodition();
  }

}
