import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Admin} from '../../Models/Admin';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.scss']
})
export class ProfilAdminComponent implements OnInit {
  admin: Admin;
  url= 'assets/img/mohamedazizchaouch.jpg';
  constructor(private connectedadminSer: AuthService) {this.admin= this.connectedadminSer.Admin;
  }

  ngOnInit() {
  }
  logout(){
    //disconectttttt
    this.connectedadminSer.DoLogout();


  }

}
