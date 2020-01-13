import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {TeacherModel} from '../Models/Teacher.Model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  teacher: TeacherModel;
  constructor(private route: Router, private httpClientSer: HttpClient, private authservice: AuthService) {
    this.teacher= this.authservice.Teacher;
  }
  getteacherbysout(): Observable<any>{
    return  this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/soutenance/' +
    this.authservice.Teacher.id);
  }
  getallsoutcalendar():Observable<any>{
    return  this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/soutenance/');
  }
  gerersoutnonce(jj:string, mm: string ,aa: string){
    return  this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/soutenance/' + jj + '/' + mm + '/' + aa);
  }
}
