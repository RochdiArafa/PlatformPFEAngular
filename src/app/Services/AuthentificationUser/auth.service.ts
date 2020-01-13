import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { Site } from 'src/app/Models/site';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public User = null;
  public  isAdmin = false;
  public isdirecteur = false ;
  public  isTeacher = false;
  public Teacher = null;

    public  isDirector = false;
  public Director = null;
  public Admin =null ;
  public Directeurdesstages = null ;
  public isChef = false;
  public Chef = null;
  public Student = null;
  public isStudent = null;


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
        this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/teachers/' +
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
        /// admin
        this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/admin/'+this.User.id + '/', this.httpOptions).subscribe(
          value => {this.Admin = value; },
          error1 => {},
          () => {
            console.log('admin');
            if ( this.Admin != null ) {
              this.isAdmin = true ;
              sessionStorage.setItem('isAdmin', 'true');
              sessionStorage.setItem('connectedAdmin', JSON.stringify(this.Admin));
              this.route.navigate(['/profileadmin']);
            }
          }
        ); // fin admin
             ///   directeur
         if(this.User != null){
         this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/teacher/authuser/' +
      login + '/' + password + '/', this.httpOptions ).subscribe(
           value => { this.Director = value; },
           error1 => {},
           () => {
             console.log('zzzzzzzzzz');
             if (this.Director != null) {
               this.isDirector = true;
               sessionStorage.setItem('isDirector', 'true' );
               sessionStorage.setItem('connectedDirector', JSON.stringify( this.Director));
               this.route.navigate(['/ProfileDirector']);
             }
           }
         );
         }
         //////////   fin directeur
        this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/directeurdestages/'+this.User.id + '/', this.httpOptions).subscribe(
          value => {this.Directeurdesstages = value; },
          error1 => {},
          () => {
            console.log('directeur des stages');
            if ( this.Directeurdesstages != null ) {
              this.isdirecteur = true ;
              sessionStorage.setItem('isdirecteur', 'true');
              sessionStorage.setItem('connectedDirecteur', JSON.stringify(this.Directeurdesstages));
              console.log(this.Directeurdesstages);
              sessionStorage.setItem('idUser', JSON.stringify(this.Directeurdesstages.id));

              this.getSite(this.Directeurdesstages.id).subscribe((data: any)=>{
                console.log(data);
                sessionStorage.setItem('connectedSite', JSON.stringify(data.id));
              })
              this.route.navigate(['/profildirecteur']);
            }
          }
        );
        //////////   fin teacher
        this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/teacher/chef/' +
          this.User.id + '/', this.httpOptions ).subscribe(
          value => { this.Chef = value; },
          error1 => {},
          () => {
            console.log('zzzzzzzzzz');
            if (this.Chef != null) {
              this.isChef = true;
              sessionStorage.setItem('isChef', 'true' );
              sessionStorage.setItem('connectedChef',JSON.stringify( this.Chef));
              this.route.navigate(['/ProfileChef']);
            }
          }
        );
        //////////   fin teacher
        //////////   fin teacher
        this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/teacher/student/' +
          this.User.id + '/', this.httpOptions ).subscribe(
          value => { this.Student = value; },
          error1 => {},
          () => {
            console.log('zzzzzzzzzz');
            if (this.Student != null) {
              this.isStudent = true;
              sessionStorage.setItem('isStudent', 'true' );
              sessionStorage.setItem('connectedStudent',JSON.stringify( this.Student));
              this.route.navigate(['/Reclamation']);
            }
          }
        );
        //////////   fin teacher
      }
    );



  }

  DoLogout() {
    this.isTeacher = false;
    this.isAdmin=false;
    this.isdirecteur=false;
    this.Directeurdesstages=null;
    this.Admin= null ;
    this.Teacher = null;


  this.isDirector = false;
    this.Director = null;
    sessionStorage.removeItem('isAdmin')
    sessionStorage.removeItem('isdirecteur')

    sessionStorage.clear();
    this.route.navigate(['/Login']);
  }

  getSite(id){
    return this.httpClientSer.get<Site>("http://localhost:9080/PlatformPFE-web/rest/site/searchsiteByDirecteurID?id="+id);
  }

}
