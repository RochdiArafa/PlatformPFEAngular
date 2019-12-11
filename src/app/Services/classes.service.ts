import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../Models/Admin';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {timeout} from 'rxjs/operators';
import {Classes} from '../Models/Classes';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  admin: Admin;
  constructor(private route: Router, private httpClientSer: HttpClient,private authservice: AuthService) {
    this.admin = this.authservice.Admin;
  }
  getallclasses(){
    return  this.httpClientSer.get<Classes[]>('http://localhost:9080/PlatformPFE-web/rest/classes'
    );
  }
  deleteclassebyid(classe: Classes | number){
    const id = typeof classe === 'number' ? classe: classe.id ;
    return  this.httpClientSer.delete('http://localhost:9080/PlatformPFE-web/rest/classes/' +
      id);
  }
  addclasse(classe: Classes): Observable<Classes>{
    return  this.httpClientSer.post<Classes>( 'http://localhost:9080/PlatformPFE-web/rest/classes/' +
      this.authservice.Admin.id, classe , this.httpOptions);
  }
  editclasse(classe: Classes): Observable<Classes>{
    return  this.httpClientSer.put<Classes>( 'http://localhost:9080/PlatformPFE-web/rest/classes', classe , this.httpOptions);

  }
}
