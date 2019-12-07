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
    let isteacherSession = sessionStorage.getItem('isTeacher');
    let isdirectorSession = sessionStorage.getItem('isDirector');

    if ( isteacherSession == 'true') {
      this.authSer.isTeacher = true;
      this.authSer.Teacher = JSON.parse(sessionStorage.getItem('connectedTeacher'));
      console.log('first time ' + isteacherSession);
    }
    if ( isdirectorSession == 'true') {
      this.authSer.isDirector = true;
      this.authSer.Director = JSON.parse(sessionStorage.getItem('connectedDirector'));
      console.log('first time ' + isdirectorSession);
    }

    if (!this.authSer.isTeacher) {
      // this.route.navigate(['/ProfileTeacher']);
      this.route.navigate(['/Login']);
    } else if(this.authSer.isTeacher) {
      this.route.navigate(['/ProfileTeacher']);
    }
    if (!this.authSer.isDirector) {
      this.route.navigate(['/Login']);
    } else if(this.authSer.isDirector) {
      this.route.navigate(['/ProfileDirector']);
    }

  }

}
