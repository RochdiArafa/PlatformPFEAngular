import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ControlIsDirectorService implements CanActivate {

  constructor(private route: Router, private authSer: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isdirectorSession = sessionStorage.getItem('isDirector');

    if ( isdirectorSession == 'true') {
      this.authSer.isDirector = true;
      this.authSer.Director = JSON.parse(sessionStorage.getItem('connectedDirector'));
      console.log('**********' + isdirectorSession);
    }


    if (this.authSer.isDirector == true ) {
      //console.log('**********'+isteacherSession);
      //this.route.navigate(['/ProfileTeacher']);
      return true;
    } else {
      this.route.navigate(['/Login']);
    }
  }

}
