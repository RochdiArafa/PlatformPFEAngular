import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './AuthentificationUser/auth.service';
import {GradeFileModel} from '../Models/GradeFile.Model';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';
import {ActionTeacherModel} from '../Models/ActionTeacher.Model';
import {TeacherModel} from '../Models/Teacher.Model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  teacher: TeacherModel;
  constructor(private route: Router, private httpClientSer: HttpClient, private authservice: AuthService) {
    this.teacher = this.authservice.Teacher;
  }

  getNbOfAllRapported(idt: number): Observable<GradeFileModel[]> {
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/listfilearapporter/' +
      this.authservice.Teacher.id ).pipe(timeout(6000));
  }
  getNbOfAllEncadred(idt: number): Observable<GradeFileModel[]> {
   return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/listfileaencadrer/' +
      this.authservice.Teacher.id ).pipe(timeout(6000));
  }
  getNbOfAllPresedent(idt: number) {
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/listfileapresent/' +
      this.authservice.Teacher.id ).pipe(timeout(6000));
  }
  getlNbOfWoringOn(idt: number) {
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/listfileworkingon/' +
      this.authservice.Teacher.id ).pipe(timeout(6000));
  }

  getTeachersAction() {
    return  this.httpClientSer.get<ActionTeacherModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/getActions/' +
      this.teacher.id ).pipe(timeout(6000));
  }


}
