import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Router} from '@angular/router';
import {TeacherService} from '../../Services/teacher.service';
import {NavigationTeacherService} from '../../Services/navigation-teacher.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {


  constructor( private route: Router, private authSer: AuthService, private navTeacher: NavigationTeacherService, private teacherser: TeacherService) { }

  ngOnInit() {
    // this.route.navigate(['/profile']);
  }
  chagetoProfile() {
    this.navTeacher.navTeachertoProfile = true;
    this.navTeacher.navTeachertofiles = false;
  }
  chagetoFiles() {
    this.navTeacher.navTeachertoProfile = false;
    this.navTeacher.navTeachertofiles = true;
  }
  logout() {
    this.authSer.DoLogout();
  }
}
