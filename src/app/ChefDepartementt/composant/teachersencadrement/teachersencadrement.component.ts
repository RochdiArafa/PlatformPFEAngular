import { Component, OnInit } from '@angular/core';
import {GradeFileModel} from '../../../Models/GradeFile.Model';
import {TeacherModel} from '../../../Models/Teacher.Model';
import {ChefDepService} from '../../../Services/ChefDep.service';

@Component({
  selector: 'app-teachersencadrement',
  templateUrl: './teachersencadrement.component.html',
  styleUrls: ['./teachersencadrement.component.scss']
})
export class TeachersencadrementComponent implements OnInit {
  listeTeachers: string[] = [];
  listeStudents: GradeFileModel[] = [];
  private grads: GradeFileModel[];
  private teachers: TeacherModel[];
  constructor(private ChefDep: ChefDepService) { }
  ngOnInit() {
    this.getMap();
    this.Getallpfe();
    this.Getallteachers();
  }
  getMap() {
    this.ChefDep.getteacherbyencadrement().subscribe((value) => {
      this.listeTeachers = Object.keys(value);
      this.listeStudents = Object.values(value);
    }, error => {}, () => {console.log(this.listeTeachers, this.listeStudents);
    });
  }
  Getallpfe() {
    this.ChefDep.getAllPfe().subscribe((value) => {
      this.grads = value;
    }, error => {}, () => {console.log(this.grads);
    });
  }
  Getallteachers() {
    this.ChefDep.getAllTeachers().subscribe((value) => {
      this.teachers = value;
    }, error => {}, () => {console.log(this.teachers);
    });
  }
}
