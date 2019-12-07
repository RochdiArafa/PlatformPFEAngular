import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../Models/Admin';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {Option} from '../Models/Option';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionssService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  admin: Admin;
  constructor(private route: Router, private httpClientSer: HttpClient,private authservice: AuthService) {
    this.admin = this.authservice.Admin;
  }
getalloptions(){
  return  this.httpClientSer.get<Option[]>('http://localhost:9080/PlatformPFE-web/rest/option/'
  );
}
deleteoptionbyid(option: Option | number ){
  const id = typeof option === 'number' ? option: option.id ;
  return  this.httpClientSer.delete('http://localhost:9080/PlatformPFE-web/rest/option/' +
    id);
}
addoption(option: Option): Observable<Option>{
  return  this.httpClientSer.post<Option>( 'http://localhost:9080/PlatformPFE-web/rest/option/' +
    this.authservice.Admin.id, option , this.httpOptions);
}
}
