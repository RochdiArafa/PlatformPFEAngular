import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public User = null;

  public  isTeacher = false;
  public Teacher = null;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private route: Router, private httpClientSer: HttpClient) { }

  DoLogin(login: string, password: string ) {
     this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/teacher/authuser/' +
      login + '/' + password + '/', this.httpOptions ).subscribe(
        value => {this.User = value; },
       error1 => {},
       () => {  console.log(this.User);

         ///   teacher
         this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/teacher/' +
           this.User.id + '/', this.httpOptions ).subscribe(
           value => { this.Teacher = value; },
           error1 => {},
           () => {
             console.log('zzzzzzzzzz');
             if (this.Teacher != null) {
               this.isTeacher = true;
               sessionStorage.setItem('isTeacher', 'true' );
               sessionStorage.setItem('connectedTeacher', JSON.stringify( this.Teacher));
               this.route.navigate(['/ProfileTeacher']);
             }
           }
         );
         //////////   fin teacher

        }
     );



  }

  DoLogout() {
    this.isTeacher = false;
    this.Teacher = null;
    this.route.navigate(['/Login']);
  }

}
