import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {Admin} from '../Models/Admin';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private route: Router, private httpClientSer: HttpClient,private authservice: AuthService) { }
  updateadmin(admin:Admin): Observable<Admin> {
    return  this.httpClientSer.put<Admin>( 'http://localhost:9080/PlatformPFE-web/rest/admin/', admin , this.httpOptions);
  }
}
