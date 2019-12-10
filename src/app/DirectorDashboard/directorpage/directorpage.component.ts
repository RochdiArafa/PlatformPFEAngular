import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Router} from '@angular/router';
import {DirectorService} from '../../Services/director.service';
import {NavigationDirectorService} from '../../Services/navigation-director.service';

@Component({
  selector: 'app-directorpage',
  templateUrl: './directorpage.component.html',
  styleUrls: ['./directorpage.component.scss']
})
export class DirectorpageComponent implements OnInit {

  constructor(private route: Router, private navDirector: NavigationDirectorService, private directorSer: DirectorService) { }

  ngOnInit() {
    // this.route.navigate(['/profile']);
  }
  DisplayProfile() {
    this.navDirector.navDirectortoProfile = true;
    this.navDirector.navDirectorfilesUndone = false;
    this.navDirector.navDirector5thlist = false;
    this.navDirector.navDirectorfileList = false;
  }
  DisplayUndoneFiles() {
    this.navDirector.navDirectortoProfile = false;
    this.navDirector.navDirectorfilesUndone = true;
    this.navDirector.navDirector5thlist = false;
    this.navDirector.navDirectorfileList = false;
  }
  DisplayStudentList(){
    this.navDirector.navDirectortoProfile = false;
    this.navDirector.navDirectorfilesUndone = false;
    this.navDirector.navDirector5thlist = true;
    this.navDirector.navDirectorfileList = false;
  }
  DisplayfileList(){
    this.navDirector.navDirectortoProfile = false;
    this.navDirector.navDirectorfilesUndone = false;
    this.navDirector.navDirector5thlist = false;
    this.navDirector.navDirectorfileList = true;
  }
}
