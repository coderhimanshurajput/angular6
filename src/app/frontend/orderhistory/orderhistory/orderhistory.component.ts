import { Component, OnInit } from '@angular/core';
import {GlobalPath} from '../../../../environments/development';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {

  data:any={};
  orderlist:any=[];
  private API_orderhistory = `${GlobalPath.apiURL}api/order/list`;
  constructor(private httpClient:HttpClient) { }

  orderhistory(){
    this.httpClient.post<any>(this.API_orderhistory, this.data).subscribe((response)=>{
      console.log(response);
      this.orderlist=response.orders;
      console.log(this.orderlist);
    },(error)=>{

      console.log(error);
    })
  }

  ngOnInit() {
    this.orderhistory();
  }

}
