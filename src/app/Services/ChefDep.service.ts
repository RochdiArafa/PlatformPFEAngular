import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GradeFileModel} from '../Models/GradeFile.Model';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';
import {OldGradeFileModel} from '../Models/OldGradeFile.Model';
import {CategoryModel} from '../Models/Category.Model';
import {TeacherModel} from '../Models/Teacher.Model';
import {Recla} from '../Models/recla';
import {Chefdepartement} from '../Models/Chefdepartement';
import {Student} from '../Models/student';
import {Notification} from '../Models/notification';

@Injectable({
  providedIn: 'root'
})
export class ChefDepService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  oldpfe: GradeFileModel;
  chefdep: Chefdepartement;
  constructor(private route: Router, private httpClientSer: HttpClient, private authservice: AuthService) {
    this.chefdep = this.authservice.Chef;
  }
  getAllOldPfe(): Observable<OldGradeFileModel[]> {
    return this.httpClientSer.get<OldGradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/pferesource/getalloldpfe')
      .pipe(timeout(4000));
  }
  getAllStudents(): Observable<Student[]> {
    return this.httpClientSer.get<Student[]>('http://localhost:9080/PlatformPFE-web/rest/student')
      .pipe(timeout(4000));
  }
  getAllTeachers(): Observable<TeacherModel[]> {
    return this.httpClientSer.get<TeacherModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacher/all')
      .pipe(timeout(4000));
  }
  getStudentsSansEncadrant(): Observable<Student[]> {
    return this.httpClientSer.get<Student[]>('http://localhost:9080/PlatformPFE-web/rest/student/studentsansencad')
      .pipe(timeout(4000));
  }
  getStudentsSansRapporteur(): Observable<Student[]> {
    return this.httpClientSer.get<Student[]>('http://localhost:9080/PlatformPFE-web/rest/student/studentsansrap')
      .pipe(timeout(4000));
  }
  public RapporterEtudiant(idS: number) {
    return  this.httpClientSer.post<number>('http://localhost:9080/PlatformPFE-web/rest/teacherres/affecterrapporteur?idStu='
      + idS , this.httpOptions ).pipe(timeout(6000));
  }
  public EncadrerEtudiant(idS: number) {
    return  this.httpClientSer.post<number>('http://localhost:9080/PlatformPFE-web/rest/teacherres/affecterencadrant?idStu='
      + idS , this.httpOptions ).pipe(timeout(6000));
  }
  getStudentsAvecRapporteur(): Observable<Student[]> {
    return this.httpClientSer.get<Student[]>('http://localhost:9080/PlatformPFE-web/rest/student/studentavecrapp')
      .pipe(timeout(4000));
  }
  getStudentavecencadrant(): Observable<Student[]> {
    return this.httpClientSer.get<Student[]>('http://localhost:9080/PlatformPFE-web/rest/student/studentavecencad')
      .pipe(timeout(4000));
  }
  getAllPfe(): Observable<GradeFileModel[]> {
    return this.httpClientSer.get<GradeFileModel[]>('http://localhost:9080/PlatformPFE-web/rest/Fiche/getallpfe')
      .pipe(timeout(4000));
  }
  public ModifierRapporteur(ids: number , idt: number) {
    return  this.httpClientSer.put<number>('http://localhost:9080/PlatformPFE-web/rest/teacherres/updaterapporteur?idst='
      + ids + '&idt=' + idt, this.httpOptions ).pipe(timeout(6000));
  }
  public ModifierEncadrant(ids: number , idt: number) {
    return  this.httpClientSer.put<number>('http://localhost:9080/PlatformPFE-web/rest/teacherres/updateencadrant?idst='
      + ids + '&idt=' + idt, this.httpOptions ).pipe(timeout(6000));
  }
  getAllcat(): Observable<CategoryModel[]> {
    return this.httpClientSer.get<CategoryModel[]>('http://localhost:9080/PlatformPFE-web/rest/teacherres/getallcat')
      .pipe(timeout(4000));
  }
  public validercat(id: number) {
    return  this.httpClientSer.put<number>('http://localhost:9080/PlatformPFE-web/rest/teacherres/validecat?idcat='
      + id, this.httpOptions ).pipe(timeout(6000));
  }
  public unvalidercat(id: number) {
    return  this.httpClientSer.put<number>('http://localhost:9080/PlatformPFE-web/rest/teacherres/unvalidecat?idcat='
      + id, this.httpOptions ).pipe(timeout(6000));
  }
  public affecterprevalidateur(ids: number , idt: number) {
    return  this.httpClientSer.put<number>('http://localhost:9080/PlatformPFE-web/rest/teacherres/affecterprevalidateur?idt='
      + idt + '&idst=' + ids, this.httpOptions ).pipe(timeout(6000));
  }
  getteacherbyencadrement(): Observable<any> {
    return this.httpClientSer.get<any>('http://localhost:9080/PlatformPFE-web/rest/teacherres/teachers')
      .pipe(timeout(4000));
  }
  addRec(reclamation: Recla, id: number): Observable<Recla> {
    return  this.httpClientSer.post<Recla>( 'http://localhost:9080/PlatformPFE-web/rest/reclamation/ajouterreclamation?idst=' +
      id, reclamation, this.httpOptions).pipe(timeout(6000));
  }
  getAllReclamations(): Observable<Recla[]> {
    return this.httpClientSer.get<Recla[]>('http://localhost:9080/PlatformPFE-web/rest/reclamation/getAllReclamation')
      .pipe(timeout(4000));
  }
  public traiterreclamation(id: number) {
    return  this.httpClientSer.put<number>('http://localhost:9080/PlatformPFE-web/rest/reclamation/traiterreclamation?idst='
      + id, this.httpOptions ).pipe(timeout(6000));
  }
  public NotifierEtudiant(notif: Notification, id: number): Observable<Notification> {
    return  this.httpClientSer.post<Notification>( 'http://localhost:9080/PlatformPFE-web/rest/notifres/ajoutnotifstudent?idst=' +
      id, notif, this.httpOptions).pipe(timeout(6000));
  }
  public getnotifbystudent(ids: number) {
    return this.httpClientSer.get<Notification[]>('http://localhost:9080/PlatformPFE-web/rest/notifres/notifbystudent?tid=' + ids)
      .pipe(timeout(4000));
  }
}

