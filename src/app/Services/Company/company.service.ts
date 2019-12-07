import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlDBService } from '../UrlDBService/url-db.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public urlBase:string;

  const 
  httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor( urlDBService:UrlDBService , private httpClient: HttpClient ) {
    
    this.urlBase = urlDBService.url;
  }

  public getRecrutedCompayByOrder(site_id:number){

    return this.httpClient.get<Object>(this.urlBase+"company/TopRecruted/?site_id="+site_id);
  }
}
