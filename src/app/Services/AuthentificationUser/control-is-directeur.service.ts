import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlIsDirecteurService implements CanActivate{

  constructor(private route: Router, private authSer: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isdirecteurSession = sessionStorage.getItem('isdirecteur');

    if ( isdirecteurSession == 'true') {
      this.authSer.isdirecteur = true;
      this.authSer.Directeurdesstages = JSON.parse(sessionStorage.getItem('connectedDirecteur'));
      console.log('**********' + isdirecteurSession);
    }


    if (this.authSer.isdirecteur == true ) {
      // console.log('**********' + isadminSession);
      // this.route.navigate(['/profileadmin']);
      return true;
    } else {
      this.route.navigate(['/Login']);
    }
  }
}
