import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlDBService } from '../UrlDBService/url-db.service';
import { Student } from 'src/app/Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public urlBase:string;

  const 
  httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor( urlDBService:UrlDBService , private httpClient: HttpClient ) {
    this.urlBase = urlDBService.url;
  }

  public getAllStudent(site_id:number){

    return this.httpClient.get<Student>(this.urlBase+"student/?site_id="+site_id);
  }

  public getAllStudentRecrutedoverContry(site_id){
    return this.httpClient.get<Student>(this.urlBase+"student/getAllStudentRecrutedoverContry/?site_id="+site_id);

  }

  getAllStudentRecrutedByContryByYear(contry , year , site_id){
    return this.httpClient.get<Student>(this.urlBase+"student/getAllStudentRecrutedbyContryandYear/?contry="+contry+"&year="+year+"&site_id="+site_id);

  }

  public getStudent(id:number){

    return this.httpClient.get<Student>(this.urlBase+"student/searchStudent/?id="+id);
  }


}
