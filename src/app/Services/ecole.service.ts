import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {Admin} from '../Models/Admin';
import {Ecole} from '../Models/Ecole';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EcoleService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
admin: Admin ;
  constructor(private route: Router, private httpClientSer: HttpClient,private authservice: AuthService) {
    this.admin = this.authservice.Admin;
  }
  getecole(){
    return  this.httpClientSer.get<Ecole []>('http://localhost:9080/PlatformPFE-web/rest/ecole/'
    );
  }
  editecole(ecole: Ecole): Observable<Ecole> {
    return  this.httpClientSer.put<Ecole>( 'http://localhost:9080/PlatformPFE-web/rest/ecole/', ecole , this.httpOptions);
  }
  addecole(ecole: Ecole): Observable<Ecole> {
    return  this.httpClientSer.post<Ecole>( 'http://localhost:9080/PlatformPFE-web/rest/ecole/' + this.authservice.Admin.id, ecole , this.httpOptions);
  }
}
