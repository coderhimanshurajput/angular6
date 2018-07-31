import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GlobalPath } from '../../../environments/development';

@Component({
  selector: 'app-about',
 templateUrl: './about.component.html',

  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private API_AboutUs=`${GlobalPath.apiURL}api/about-us`;

  @Input() hero: string;
  
  constructor(private httpClient: HttpClient) { }

/*-------------------------------------About-Us-------------------------------------------------*/  

  about(){
       this.httpClient.get<any>(this.API_AboutUs).subscribe((response)=>{
      console.log(response);
     
    },(error)=>{
      console.log(error);
    })
  }
 /*------------------------------------End of About-us--------------------------------------------*/ 

  ngOnInit() {
    this.about();
  }

}
