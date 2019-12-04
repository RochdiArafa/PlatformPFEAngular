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

}
