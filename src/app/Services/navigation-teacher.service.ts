import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationTeacherService {
  // Global
  public  navTeachertoProfile = true;
  public  navTeachertofiles = false;

  // teacherFiles
  public navtoencadred = true;
  public navtoRapportd = false;
  public navtopresented = false;

  constructor() { }
}
