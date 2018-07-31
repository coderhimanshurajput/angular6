import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';
import {LocalStorage} from '@ngx-pwa/local-storage';
import { Key } from 'protractor';

@Injectable ()


export class AuthInterceptor implements HttpInterceptor {
  logedin:any;
  constructor(private cookieService: CookieService, private localStorage:LocalStorage) { }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const Token = this.cookieService.get("token");
    console.log(this.localStorage.getItem('token'));
    //console.log(Token);
              
    if (Token) {

      this.logedin=true;
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + Token)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}

export class ABC implements HttpInterceptor {

      intercept(req: HttpRequest <any>, next: HttpHandler): Observable <any> {
          return next.handle(req);
      }
}
@Injectable()
export class AuthService {

  constructor(private cookieService: CookieService) {}

    getToken() {
      return this.cookieService.get("token");
    }
    isloggedin() {
      return this.getToken() !== "";
    }
    
   

}

