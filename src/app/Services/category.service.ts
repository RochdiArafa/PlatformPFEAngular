import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './AuthentificationUser/auth.service';
import {Observable} from 'rxjs';
import {GradeFileModel} from '../Models/GradeFile.Model';
import {CategoryModel} from '../Models/Category.Model';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private route: Router, private httpClientSer: HttpClient, private authservice: AuthService) { }

  public MypreferedCategories(): Observable<CategoryModel[]>  {
    return  this.httpClientSer.get<CategoryModel[]>('http://localhost:9080/PlatformPFE-web/rest/categories/MyPrefered/' +
      this.authservice.Teacher.id );
  }

  public ProposerCategorie(Categry: any) {
    return  this.httpClientSer.post<CategoryModel>('http://localhost:9080/PlatformPFE-web/rest/categories/propose/'
      + this.authservice.Teacher.id , Categry , this.httpOptions );
  }

  public deletePreferedCategorie(idC: number): Observable<any>  {
    return  this.httpClientSer.delete<any>('http://localhost:9080/PlatformPFE-web/rest/categories/DELETEpreferedCat/'
      + idC + '/' + this.authservice.Teacher.id);
  }

  public getmyproposedCategories() {
    return  this.httpClientSer.get<any[]>('http://localhost:9080/PlatformPFE-web/rest/categories/MyProposed/'
      + this.authservice.Teacher.id);
  }

}
