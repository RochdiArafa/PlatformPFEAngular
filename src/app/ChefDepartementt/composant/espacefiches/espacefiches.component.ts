import { Component, OnInit } from '@angular/core';
import {GradeFileModel} from '../../../Models/GradeFile.Model';
import {PrevalidateurComponent} from '../../../Dialogs/prevalidateur/prevalidateur.component';
import {ChefDepService} from '../../../Services/ChefDep.service';
import {MatDialog} from '@angular/material';
import {TeacherModel} from '../../../Models/Teacher.Model';

@Component({
  selector: 'app-espacefiches',
  templateUrl: './espacefiches.component.html',
  styleUrls: ['./espacefiches.component.scss']
})
export class EspacefichesComponent implements OnInit {
  grads: GradeFileModel[] = [];
  teachers: TeacherModel[] = [];
  constructor(private chefService: ChefDepService, private details: MatDialog) { }
  Getallpfe() {
    this.chefService.getAllPfe().subscribe((value) => {
      this.grads = value;
    }, error => {}, () => {console.log(this.grads);
    });
  }
  Getallteachers() {
    this.chefService.getAllTeachers().subscribe((value) => {
      this.teachers = value;
    }, error => {}, () => {console.log(this.teachers);
    });
  }
  ngOnInit() {
    this.Getallpfe();
    this.Getallteachers();
  }

  affecterprevalidateur(obj: GradeFileModel) {
    this.details.open(PrevalidateurComponent, { width: '800px', maxHeight: '900px',
      data: {fichepfe: obj,
        teacherslist: this.teachers}
    });
    this.details.afterAllClosed.subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
