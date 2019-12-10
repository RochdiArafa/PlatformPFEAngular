import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './AuthentificationUser/auth.service';
import {GradeFileModel} from '../Models/GradeFile.Model';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';
import {ActionTeacherModel} from '../Models/ActionTeacher.Model';
import {DirectorModel} from '../Models/Director.Model';
import {not} from 'rxjs/internal-compatibility';
import {SkillModel} from '../Models/Skill.Model';
import {StudentModel} from '../Models/Student.Model';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  director: DirectorModel;
  constructor(private route: Router, private httpClientSer: HttpClient, private authservice: AuthService) {
    this.director = this.authservice.Director;
  }

  getListeSansFiche(deb: string): Observable<StudentModel[]> {
    return  this.httpClientSer.get<StudentModel[]>('http://localhost:9080/PlatformPFE-web/rest/Direction/listeSansFiche?anneeScolaire=' +
      deb );
  }
  getListeSansFichePeriode(deb: string, fin:string): Observable<StudentModel[]> {
    return  this.httpClientSer.get<StudentModel[]>('http://localhost:9080/PlatformPFE-web/rest/Direction/listeSansFichePeriode?deb=' +
      deb+'&fin='+fin );
  }

  getallstudents(){
    return  this.httpClientSer.get<StudentModel[]>('http://localhost:9080/PlatformPFE-web/rest/student/notEnabled');
  }
  enablestudent(stu:StudentModel){
    return this.httpClientSer.put<StudentModel>('http://localhost:9080/PlatformPFE-web/rest/Direction/activerEtudiant?id='+stu.id,stu,this.httpOptions);
  }

  getListFiles(etat: string, pays: string, year: string){
    var UrlEtat:string;
    var UrlPays:string;
    var UrlYear:string;
    if(etat==""){
      UrlEtat="";
    }
    else{
      UrlEtat="etat="+etat;
    }
    if(pays==""){
      UrlPays="";
    }
    else{
      UrlPays="&pays="+pays;
    }
    if(year==""){
      UrlYear="";
    }
    else{
      UrlYear="&year="+year;
    }
    return  this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/Fiche?'+UrlEtat+UrlPays+UrlYear);
  }

  AcceptFile(g:GradeFileModel){
    return this.httpClientSer.put<GradeFileModel>('http://localhost:9080/PlatformPFE-web/rest/Direction/accepterFiche?id='+g.id,g,this.httpOptions);
  }

  RefuseFile(g:GradeFileModel){
    return this.httpClientSer.put<GradeFileModel>('http://localhost:9080/PlatformPFE-web/rest/Direction/refuserFiche?id='+g.id,g,this.httpOptions);
  }

  getListCanceledFiles(){
    return this.httpClientSer.get<GradeFileModel>('http://localhost:9080/PlatformPFE-web/rest/Direction/listannulerFiche');
  }

  CancelFile(g:GradeFileModel,motif:string){
    var decision:string;
    var UrlMotif:string;
    if(motif!=""){
      decision="encours";
      UrlMotif="&motif="+motif;
    }
    else{
      decision="annulée";
      UrlMotif="";
    }
    return this.httpClientSer.put<GradeFileModel>('http://localhost:9080/PlatformPFE-web/rest/Direction/annulerFiche?id='+g.id+'&decision='
      +decision+UrlMotif,g,this.httpOptions);
  }


}
