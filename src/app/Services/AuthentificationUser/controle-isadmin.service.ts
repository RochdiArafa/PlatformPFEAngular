import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControleIsadminService implements CanActivate{

  constructor(private route: Router, private authSer: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isadminSession = sessionStorage.getItem('isAdmin');

    if ( isadminSession == 'true') {
      this.authSer.isAdmin = true;
      this.authSer.Admin = JSON.parse(sessionStorage.getItem('connectedAdmin'));
      console.log('**********' + isadminSession);
    }


    if (this.authSer.isAdmin == true ) {
     // console.log('**********' + isadminSession);
     // this.route.navigate(['/profileadmin']);
      return true;
    } else {
      this.route.navigate(['/Login']);
    }
  }

}
