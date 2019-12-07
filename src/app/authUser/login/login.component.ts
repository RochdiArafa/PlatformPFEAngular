import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  UserForm = new FormGroup({
    login: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private userser: AuthService, private route: Router) {
  }

  ngOnInit() {
  }
  Login() {
    this.userser.DoLogin( this.UserForm.value.login, this.UserForm.value.password);
  }


}
