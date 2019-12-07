import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlDBService } from '../UrlDBService/url-db.service';
import { GradProjectFile } from 'src/app/Models/grad-project-file';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public urlBase:string;

  const 
  httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor( urlDBService:UrlDBService , private httpClient: HttpClient ) {
    
    this.urlBase = urlDBService.url;
  }

  public getNbStageParCategorie(site_id:number , category_id : number){

    return this.httpClient.get<GradProjectFile>(this.urlBase+"category/StageParCategory/?id="+category_id+"&site_id="+site_id);
  }

  public getStageParCategorie(site_id:number){

    return this.httpClient.get<Object>(this.urlBase+"category/ListStageParCategory/?site_id="+site_id);
  }
}
