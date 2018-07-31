import {Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GlobalPath} from '../environments/development';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  private API_Call = `${GlobalPath.apiURL}api/about-us`;
  constructor(private  httpClient: HttpClient) {}


  getschool() {
    this.httpClient.get(this.API_Call)
      .subscribe((response) => {
        console.log(response);
      },
        error => {

        console.log(error);
        });
  }


}
