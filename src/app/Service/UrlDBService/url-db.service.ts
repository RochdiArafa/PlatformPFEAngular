import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlDBService {
  public url:string
  constructor() {
    this.url = "http://localhost:9080/PlatformPFE-web/rest/";
   }
}
