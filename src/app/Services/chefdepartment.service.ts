import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../Models/Admin';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {timeout} from 'rxjs/operators';
import {Chefdepartement} from '../Models/Chefdepartement';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChefdepartmentService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  admin: Admin;
  constructor(private route: Router, private httpClientSer: HttpClient,private authservice: AuthService) {
    this.admin = this.authservice.Admin;
  }
  getallchefdeps(){
    return  this.httpClientSer.get<Chefdepartement[]>('http://localhost:9080/PlatformPFE-web/rest/chefdepartement'
    );
  }
  addchefdep(chefdep: Chefdepartement): Observable<Chefdepartement>{
    return  this.httpClientSer.post<Chefdepartement>( 'http://localhost:9080/PlatformPFE-web/rest/chefdepartement/' +
      this.authservice.Admin.id, chefdep , this.httpOptions);
  }
  deletechef(chef: Chefdepartement | number){
    const id = typeof chef === 'number' ? chef: chef.id ;
    return  this.httpClientSer.delete('http://localhost:9080/PlatformPFE-web/rest/chefdepartement/' +
      id);
  }
}
