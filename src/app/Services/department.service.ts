import { Injectable } from '@angular/core';
import {Admin} from '../Models/Admin';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {Site} from '../Models/Site';
import {timeout} from 'rxjs/operators';
import {Department} from '../Models/Department';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
admin: Admin;

  constructor(private route: Router, private httpClientSer: HttpClient,private authservice: AuthService) {
    this.admin = this.authservice.Admin;
  }
  getalldepartments(){
    return  this.httpClientSer.get<Department[]>('http://localhost:9080/PlatformPFE-web/rest/departement'
    );
  }
  deletedepartment(department: Department | number){
    const id = typeof department === 'number' ? department : department.id;
    return  this.httpClientSer.delete('http://localhost:9080/PlatformPFE-web/rest/departement/' +
      id);

  }
  adddepartment(department: Department): Observable<Department>{
    return  this.httpClientSer.post<Department>( 'http://localhost:9080/PlatformPFE-web/rest/departement/' +
      this.authservice.Admin.id, department , this.httpOptions);
  }
  affecterchef(idd: number , idchef: number){
    return  this.httpClientSer.get('http://localhost:9080/PlatformPFE-web/rest/departement/affecterchefdepartement/'+
      idd + '/' + idchef);
  }
}
