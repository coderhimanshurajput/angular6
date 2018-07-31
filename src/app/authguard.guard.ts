import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './config';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private user: AuthService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.user.isloggedin()) {
          return true;

    } else {
        this.router.navigate(['']);
        return false;
    }

  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthguardRegister implements CanActivate {
  constructor(private user: AuthService, private router: Router, private cookieService: CookieService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.user.isloggedin() && this.cookieService.get('terms_conditions') !="true") {
        console.log(this.cookieService.get('step1'));
              return true;


    } else {
        this.router.navigate(['']);
        return false;
    }

  }
}
