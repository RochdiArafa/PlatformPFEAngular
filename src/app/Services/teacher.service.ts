import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './AuthentificationUser/auth.service';
import {GradeFileModel} from '../Models/GradeFile.Model';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';
import {ActionTeacherModel} from '../Models/ActionTeacher.Model';
import {TeacherModel} from '../Models/Teacher.Model';
import {not} from 'rxjs/internal-compatibility';
import {SkillModel} from '../Models/Skill.Model';

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
      this.authservice.Teacher.id );
  }
  getNbOfAllEncadred(idt: number): Observable<GradeFileModel[]> {
   return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/listfileaencadrer/' +
      this.authservice.Teacher.id );
  }
  getNbOfAllPresedent(idt: number) {
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/listfileapresent/' +
      this.authservice.Teacher.id );
  }
  getlNbOfWoringOn(idt: number) {
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/listfileworkingon/' +
      this.authservice.Teacher.id );
  }

  getTeachersAction() {
    return  this.httpClientSer.get<ActionTeacherModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/getActions/' +
      this.teacher.id );
  }

  prevaliderpfeFile(idf: number) {
    // http://localhost:9080/PlatformPFE-web/rest/teacher/prevalider/1/1/encadrant
    return  this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/teacher/prevalider/' +
      this.authservice.Teacher.id + '/' + idf + '/encadrant' );
  }

  noterfileenttqEncadrant(idf: number, note: any) {
// http://localhost:9080/PlatformPFE-web/rest/teacher/notter/1/1/19/encadrant
    return  this.httpClientSer.get('http://localhost:9080/PlatformPFE-web/rest/teacher/notter/' +
      this.authservice.Teacher.id + '/' + idf + '/' + note + '/encadrant' );
  }


  noterfileenttqRapporteur(idf: number, note: any) {
// http://localhost:9080/PlatformPFE-web/rest/teacher/notter/1/1/19/encadra
    return  this.httpClientSer.get('http://localhost:9080/PlatformPFE-web/rest/teacher/notter/' +
      this.authservice.Teacher.id + '/' + idf + '/' + note + '/Rapporteur' );

    //  http://localhost:9080/PlatformPFE-web/rest/teacher/motif/1/1/this is nice/encadrant
  }

  donnerMotriffileenttqEncadrant(idf: number, Motif: string) {
//  http://localhost:9080/PlatformPFE-web/rest/teacher/motif/1/1/this is nice/encadrant
    return  this.httpClientSer.get('http://localhost:9080/PlatformPFE-web/rest/teacher/motif/' +
      this.authservice.Teacher.id + '/' + idf + '/' + Motif + '/encadrant' );

    //  http://localhost:9080/PlatformPFE-web/rest/teacher/motif/1/1/this is nice/encadrant
  }
  getMySkills() {
//  http://localhost:9080/PlatformPFE-web/rest/teacher/motif/1/1/this is nice/encadrant
    return  this.httpClientSer.get<SkillModel[]>('http://localhost:9080/PlatformPFE-web/rest/skills/' +
      this.authservice.Teacher.id + '/' );

    //  http://localhost:9080/PlatformPFE-web/rest/teacher/motif/1/1/this is nice/encadrant
  }
  // http://localhost:9080/PlatformPFE-web/rest/teacher/filerapportedBetwwen2Years/1/2017/2019
 // http://localhost:9080/PlatformPFE-web/rest/teacher/fileencadreBetwwen2Years/1/2017/2019
  getfilesEncadredBetween2Yrears(year1: number, year2: number) {
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/fileencadreBetwwen2Years/' +
      this.teacher.id + '/' + year1 + '/' + year2 );
  }

  getfilesRapportedBetween2Yrears(year1: number, year2: number) {
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/filerapportedBetwwen2Years/' +
      this.teacher.id + '/' + year1 + '/' + year2 );
  }

  getfilesPresentedBetween2Yrears(year1: number, year2: number) {
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/filepresedentBetwwen2Years/' +
      this.teacher.id + '/' + year1 + '/' + year2 );
  }


getmosNottedencadredCategorie() {
  return  this.httpClientSer.get<any[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/bestnoteencadredcategorie/'
  + this.teacher.id);
}





}
