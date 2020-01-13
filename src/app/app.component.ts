import { Component } from '@angular/core';
import {AuthService} from './Services/AuthentificationUser/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PlatformPfe';

  constructor(private authSer: AuthService, private route: Router) {
  let isdirectorSession = sessionStorage.getItem('isDirector');
    if( this.authSer.Teacher != null){
      let isteacherSession = sessionStorage.getItem('isTeacher');

      if ( isteacherSession == 'true') {
        this.authSer.isTeacher = true;
        this.authSer.Teacher = JSON.parse(sessionStorage.getItem('connectedTeacher'));
        console.log('first time ' + isteacherSession);
      }

      if (!this.authSer.isTeacher) {
        // this.route.navigate(['/ProfileTeacher']);
        this.route.navigate(['/Login']);
      } else {
        this.route.navigate(['/ProfileTeacher']);
      }

    }

    if(this.authSer.Directeurdesstages != null){
      let isdirecteurSession = sessionStorage.getItem('isdirecteur');

      if ( isdirecteurSession == 'true') {
        this.authSer.isdirecteur = true;
        this.authSer.Directeurdesstages = JSON.parse(sessionStorage.getItem('connectedDirecteur'));
        console.log('first time ' + this.authSer.Directeurdesstages.id);
      }

      if (!this.authSer.isdirecteur) {
        // this.route.navigate(['/ProfileTeacher']);
        this.route.navigate(['/Login']);
      }
      else{
        console.log(this.authSer.isdirecteur) ;
        this.route.navigate(['/profildirecteur']);
      }


    }
  if ( isdirectorSession == 'true') {
      this.authSer.isDirector = true;
      this.authSer.Director = JSON.parse(sessionStorage.getItem('connectedDirector'));
      console.log('first time ' + isdirectorSession);
    }
    if(this.authSer.Admin != null){
      let isadminSession = sessionStorage.getItem('isAdmin');

      if ( isadminSession == 'true') {
        this.authSer.isAdmin = true;
        this.authSer.Admin = JSON.parse(sessionStorage.getItem('connectedAdmin'));
        console.log('first time ' + this.authSer.Admin.id);
      }

      if (!this.authSer.isAdmin) {
        // this.route.navigate(['/ProfileTeacher']);
        this.route.navigate(['/Login']);
      }
      else{
        console.log(this.authSer.isAdmin) ;
        this.route.navigate(['/profileadmin']);
      }

    }
    if (!this.authSer.isDirector) {
      this.route.navigate(['/Login']);
    } else if(this.authSer.isDirector) {
      this.route.navigate(['/ProfileDirector']);
    }



  }

}
