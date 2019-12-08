import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../Models/Admin';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {Directeurdesstages} from '../Models/Directeurdesstages';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirecteurdesstageService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  admin: Admin;
  constructor(private route: Router, private httpClientSer: HttpClient,private authservice: AuthService) {
    this.admin = this.authservice.Admin;
  }
  getalldirecteurdesstages(){
    return  this.httpClientSer.get<Directeurdesstages[]>('http://localhost:9080/PlatformPFE-web/rest/directeurdestages'
    );
  }
  notifchef(){
    return this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/student/mailchef');
  }
  notifencad() {
    return this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/student/mailencad');
  }
  notifrap() {
    return this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/student/mailrap');
  }
  adddirecteur(directeur: Directeurdesstages): Observable<Directeurdesstages>{
    return  this.httpClientSer.post<Directeurdesstages>( 'http://localhost:9080/PlatformPFE-web/rest/directeurdestages/' +
      this.authservice.Admin.id, directeur , this.httpOptions);
  }
}
