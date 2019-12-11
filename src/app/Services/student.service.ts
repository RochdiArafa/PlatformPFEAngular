import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {Student1} from '../Models/Student1';
import {Observable} from 'rxjs';
import {Classes} from '../Models/Classes';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private route: Router, private httpClientSer: HttpClient, private authservice: AuthService) {
  }

  getallstudent() {
    return this.httpClientSer.get<Student1[]>('http://localhost:9080/PlatformPFE-web/rest/student/'
    );
  }
  addstudent(student: Student1): Observable<Student1>{
    return  this.httpClientSer.post<Student1>( 'http://localhost:9080/PlatformPFE-web/rest/student/' +
      this.authservice.Admin.id, student , this.httpOptions);
  }
  deletestudent(student: Student1 | number){
    const id = typeof student === 'number' ? student: student.id ;
    return  this.httpClientSer.delete('http://localhost:9080/PlatformPFE-web/rest/student/' +
      id);
  }
}
