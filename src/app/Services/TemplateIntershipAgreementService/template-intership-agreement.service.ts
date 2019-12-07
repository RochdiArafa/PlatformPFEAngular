import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlDBService } from '../UrlDBService/url-db.service';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';

@Injectable({
  providedIn: 'root'
})
export class TemplateIntershipAgreementService {
  public urlBase:string;

  const 
  httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor( urlDBService:UrlDBService , private httpClient: HttpClient ) {
    this.urlBase = urlDBService.url;
  }


  public ajouter(T:TemplateIntershipAgreement){

    return this.httpClient.post<TemplateIntershipAgreement>(encodeURI(this.urlBase+"templateIntershipAgreement/?template="+T.template+"&site_id="+T.site), this.httpOptions);
  }
	
	public search(id:number){

    return this.httpClient.get<TemplateIntershipAgreement>(this.urlBase+"templateIntershipAgreement/?id="+id);
  }

	
	public modifier(T:TemplateIntershipAgreement ){
    return this.httpClient.put<TemplateIntershipAgreement>(encodeURI(this.urlBase+"templateIntershipAgreement/?template="+T.template+"&site_id="+T.site+"&id="+T.id), this.httpOptions);
  }

	public delete(id:number){

    return this.httpClient.delete<TemplateIntershipAgreement>(this.urlBase+"templateIntershipAgreement/?id="+id); 
  }
  
	public exportTemplateFile(id:number){

  }
}
