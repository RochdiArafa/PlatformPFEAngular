import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationDirectorService {
  // Global
    public  navDirectortoProfile = true;
    public  navDirectorfilesUndone = false;
    public  navDirector5thlist = false;
    public navDirectorfileList = false;

    /*s
    public navtoencadred = true;
    public navtoRapportd = false;
    public navtopresented = false;*/

  constructor() { }
}
