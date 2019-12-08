import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './AuthentificationUser/auth.service';
import {Admin} from '../Models/Admin';
import {GradeFileModel} from '../Models/GradeFile.Model';
import {timeout} from 'rxjs/operators';
import {Site} from '../Models/Site';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
admin: Admin;
  constructor(private route: Router, private httpClientSer: HttpClient,private authservice: AuthService) {
    this.admin = this.authservice.Admin;
  }


  getallsites(){
    return  this.httpClientSer.get<Site[]>('http://localhost:9080/PlatformPFE-web/rest/site'
    );

  }
  deletesitebyid( site: Site | number){
    const id = typeof site === 'number' ? site : site.id;
    return  this.httpClientSer.delete('http://localhost:9080/PlatformPFE-web/rest/site/' +
    id);
  }
  addsite(site: Site): Observable<Site>  {

    return  this.httpClientSer.post<Site>( 'http://localhost:9080/PlatformPFE-web/rest/site/' +
      this.authservice.Admin.id, site , this.httpOptions);
}
affecterdirecteur(ids: number , idds: number) {
    return  this.httpClientSer.get('http://localhost:9080/PlatformPFE-web/rest/site/affecterdireteurtosite/'+
  ids + '/' + idds).pipe(timeout(4000));

}

}
