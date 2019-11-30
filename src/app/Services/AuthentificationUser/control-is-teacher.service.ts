import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ControlIsTeacherService implements CanActivate {

  constructor(private route: Router, private authSer: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isteacherSession = sessionStorage.getItem('isTeacher');

    if ( isteacherSession == 'true') {
      this.authSer.isTeacher = true;
      this.authSer.Teacher = JSON.parse(sessionStorage.getItem('connectedTeacher'));
      console.log('**********' + isteacherSession);
    }


    if (this.authSer.isTeacher == true ) {
      //console.log('**********'+isteacherSession);
      //this.route.navigate(['/ProfileTeacher']);
      return true;
    } else {
      this.route.navigate(['/Login']);
    }
  }

}
