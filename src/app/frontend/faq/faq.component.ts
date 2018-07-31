import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalPath} from '../../../environments/development'
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  private API_Faq = `${GlobalPath.apiURL}api/faq`;
  myText
  constructor(private httpClient:HttpClient) { }
  FAQ(){
  
    this.httpClient.get<any>(this.API_Faq).subscribe((response)=>{
      console.log(response);
      this.myText=response;
    },(error)=>{
      console.log(error);
    })
  }
 

  ngOnInit() {
    this.FAQ();
  }

}
