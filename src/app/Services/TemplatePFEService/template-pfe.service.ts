import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemplatePFE } from '../../Models/template-pfe';
import { UrlDBService } from '../UrlDBService/url-db.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TemplatePFEService {
  public urlBase:string;

  const 
  httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor( urlDBService:UrlDBService , private httpClient: HttpClient ) {
    this.urlBase = urlDBService.url;
  }


  public ajouter(T:TemplatePFE){
    return this.httpClient.post<TemplatePFE>(encodeURI(this.urlBase+"templatePFE/?template="+T.template+"&site_id="+T.site) , this.httpOptions);
  }
	
	public search(id:number){

    return this.httpClient.get<TemplatePFE>(this.urlBase+"templatePFE/?id="+id);
  }

	
	public modifier(T:TemplatePFE ){
    return this.httpClient.put<TemplatePFE>(encodeURI(this.urlBase+"templatePFE/?template="+T.template+"&site_id="+T.site+"&id="+T.id), this.httpOptions);
  }

	public delete(id:number){

    return this.httpClient.delete<TemplatePFE>(this.urlBase+"templatePFE/?id="+id); 
  }
  
	public exportTemplateFile(id:number){

  }

}
