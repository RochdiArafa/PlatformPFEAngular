import { Component, OnInit } from '@angular/core';
import {GradeFileModel} from '../../../Models/GradeFile.Model';
import {TeacherService} from '../../../Services/teacher.service';
import {NavigationTeacherService} from '../../../Services/navigation-teacher.service';
import {MatDialog} from '@angular/material';
import {MydialogueComponent} from '../../Dialogs/mydialogue/mydialogue.component';
import {ViewDetailFileComponent} from '../../Dialogs/view-detail-file/view-detail-file.component';

@Component({
  selector: 'app-teacher-files',
  templateUrl: './teacher-files.component.html',
  styleUrls: ['./teacher-files.component.scss']
})
export class TeacherFilesComponent implements OnInit {

  Listencadred: GradeFileModel[] = [];
  Listrapported: GradeFileModel[] = [];
  Listpresented: GradeFileModel[] = [];
  constructor(public dialog: MatDialog, private teacherService: TeacherService, private navTeacher: NavigationTeacherService) { }

  ngOnInit() {
    this.GetListpresedent();
    this.GetListencadred();
    this.GetListrapported();
  }

  GetListencadred() {
    this.teacherService.getNbOfAllEncadred(0).subscribe(
      (value) => {
        this.Listencadred = value;
      }, e => {
        console.log(e);
      },
      () => {
        let i = 0;
        for (let obj of this.Listencadred) {
          console.log('this is the deleted Obj ' + obj.note_rapporteur);
          if (obj.note != 0 ) {
              this.Listencadred.splice(i, 1);
              console.log('this is deleted ! ' + obj.id);
          }
          i++;
        }
        console.log(this.Listencadred);
      }
    );
  }
  GetListrapported() {
    this.teacherService.getNbOfAllRapported(0).subscribe(
      (value) => {
        this.Listrapported = value;
      }, e => {},
          () => {
            let i = 0;
            for (let obj of this.Listrapported) {
              if (obj.note_rapporteur != 0) {
                this.Listrapported.splice(i, 1);
              }
              i++;
            }
          }
    );
  }


  GetListpresedent() {
    this.teacherService.getNbOfAllPresedent(0).subscribe(
      (value) => {
        this.Listpresented = value;
      }, e => {},
      () => {
        let i = 0;
        for (let obj of this.Listpresented) {
          if (obj.note != 0 && obj.note_rapporteur != 0) {
            this.Listpresented.splice(i, 1);
          }
          i++;
        }
      }
    );
  }


  ShowDetails(file: GradeFileModel) {

    let typef  = '';
    if ( this.navTeacher.navtoencadred === true  ) { typef = 'encadred'; }
    if ( this.navTeacher.navtoRapportd === true  ) { typef = 'rapported'; }
    if ( this.navTeacher.navtopresented === true  ) { typef = 'presedent'; }

    const dialogRef = this.dialog.open(ViewDetailFileComponent, { width: '800px', maxHeight: '900px',
      data: {pfe: file, type: typef }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

  prevalidatefile(idf: number) {

  }



  chagetoencadred() {
    this.navTeacher.navtoencadred = true;
    this.navTeacher.navtopresented = false;
    this.navTeacher.navtoRapportd = false;
}
  chagetorapported() {
    this.navTeacher.navtoencadred = false;
    this.navTeacher.navtopresented = false;
    this.navTeacher.navtoRapportd = true;
  }

  chagetopresented() {
    this.navTeacher.navtoencadred = false;
    this.navTeacher.navtopresented = true;
    this.navTeacher.navtoRapportd = false;
  }

}
