import { Component, OnInit } from '@angular/core';
import {Recla} from '../../../Models/recla';
import {TraitementdialogComponent} from '../../../Dialogs/traitementdialog/traitementdialog.component';
import {ChefDepService} from '../../../Services/ChefDep.service';
import {MatDialog} from '@angular/material';
import {TeacherModel} from '../../../Models/Teacher.Model';

@Component({
  selector: 'app-traitementrec',
  templateUrl: './traitementrec.component.html',
  styleUrls: ['./traitementrec.component.scss']
})
export class TraitementrecComponent implements OnInit {
  private teacherlist: TeacherModel[] = [];
  private reclalist: Recla[] = [];
  objj: Recla;
  clicked: boolean;
  constructor(private chefDep: ChefDepService, private traitdialog: MatDialog) { }

  ngOnInit() {
    this.GetallTeachers();
    this.GetAllRecla();
  }
  GetallTeachers() {
    this.chefDep.getAllTeachers().subscribe((value) => {
      this.teacherlist = value;
    }, error => {}, () => {console.log(this.teacherlist); });
  }
  GetAllRecla() {
    this.chefDep.getAllReclamations().subscribe((value) => {
      this.reclalist = value;
    }, error => {}, () => {console.log(this.reclalist); });
  }

  click(obj: Recla) {
    this.objj = obj;
    if (this.clicked === false) {
      this.clicked = true;
    } else {
      this.clicked = false ; }
  }

  opendialog(objj: Recla) {
    this.traitdialog.open(TraitementdialogComponent, { width: '800px', maxHeight: '900px',
      data: {reclamation: objj,
        listeteachersreclamation: this.teacherlist,
      }
    });
    this.traitdialog.afterAllClosed.subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
      // this.animal = result;
    });
  }
}
