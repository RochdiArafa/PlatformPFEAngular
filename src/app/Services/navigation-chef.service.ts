import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationChefService {
  // Global
  public  navcheftooldpfe = true;
  public  navcheftoadministration = false;
  public navcheftocategories = false;
  public navcheftofiches = false;
  public navcheftoencadrement = false;
  public navcheftotraitement = false;
  constructor() { }
}
