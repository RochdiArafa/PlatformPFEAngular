import {Component, OnDestroy, OnInit} from '@angular/core';
import {GradeFileModel} from '../../../Models/GradeFile.Model';
import {TeacherService} from '../../../Services/teacher.service';
import {NavigationTeacherService} from '../../../Services/navigation-teacher.service';
import {MatDialog} from '@angular/material';
import {MydialogueComponent} from '../../Dialogs/mydialogue/mydialogue.component';
import {ViewDetailFileComponent} from '../../Dialogs/view-detail-file/view-detail-file.component';
import {AreUSureComponent} from '../../Dialogs/are-usure/are-usure.component';
import {CsvDataService} from './csv';

@Component({
  selector: 'app-teacher-files',
  templateUrl: './teacher-files.component.html',
  styleUrls: ['./teacher-files.component.scss']
})
export class TeacherFilesComponent implements OnInit {

  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;
  sub5: any;
  sub6: any;
  sub7: any;
  Listencadred: GradeFileModel[] = [];
  Listrapported: GradeFileModel[] = [];
  Listpresented: GradeFileModel[] = [];
  constructor(public dialog: MatDialog, private teacherService: TeacherService,
              private navTeacher: NavigationTeacherService, public areusuredialogue: MatDialog) { }

  ngOnInit() {
    this.teacherService.sendSMSapi().subscribe((v) => {}, (e) => {}, () => {
        console.log('heyyy aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa baby');
      }
    );
    this.GetListpresedent();
    this.GetListencadred();
    this.GetListrapported();
  }

  GetListencadred() {
    this.sub1 = this.teacherService.getNbOfAllEncadred(0).subscribe(
      (value) => {
        this.Listencadred = value;
      }, e => {
        console.log(e);
      },
      () => {

        for (let i = 0 ; i < this.Listencadred.length ; i++ ) {
          console.log('we are in the loop !!!!!!!! ' + this.Listencadred[i].description);
          if (this.Listencadred[i].note !== 0) {
            console.log('this is the deleted i =  ' + i + 'haha' + this.Listencadred[i].description);
            this.Listencadred.splice(i, 1);
            i--;
          }

        }
      }
    );
  }
  GetListrapported() {
    this.sub2 = this.teacherService.getNbOfAllRapported(0).subscribe(
      (value) => {
        this.Listrapported = value;
      }, e => {},
      () => {
        for (let i = 0 ; i < this.Listrapported.length ; i++ ) {
          console.log('we are in the loop !!!!!!!! ' + this.Listrapported[i].description);
          if (this.Listrapported[i].note_rapporteur != 0) {
            console.log('this is the deleted i =  ' + i + 'haha' + this.Listrapported[i].description);
            this.Listrapported.splice(i, 1);
            i--;
          }

        }

      }
    );
  }


  GetListpresedent() {
    this.sub3 =  this.teacherService.getNbOfAllPresedent(0).subscribe(
      (value) => {
        this.Listpresented = value;
      }, e => {},
      () => {
        for (let i = 0 ; i < this.Listpresented.length ; i++ ) {
          console.log('we are in the loop !!!!!!!! ' + this.Listpresented[i].description);
          if (this.Listpresented[i].note != 0 && this.Listpresented[i].note_rapporteur != 0) {
            console.log('this is the deleted i =  ' + i + 'haha' + this.Listpresented[i].description);
            this.Listpresented.splice(i, 1);
            i--;
          }

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
    this.sub4 = dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
      // this.animal = result;
    });

  }

  prevalidate( file: GradeFileModel ) {

    const dia = this.areusuredialogue.open(AreUSureComponent, { data: {pfeaprevalider: file}});
    this.sub5 = dia.afterClosed().subscribe(result => {
      console.log(result);

      if (result == 'yes') {
        this.sub6 = this.teacherService.prevaliderpfeFile(file.id).subscribe(
          (v) => {  console.log('prevalidatedd !!!!'); },
          e => {},
          () => {
            console.log('completed !!!!');
            this.ngOnInit();
            //this.ngOnInit();
          }
        );

      }


      // this.animal = result;
    }, e => {

    }, () => {
      this.ngOnInit();
    });

    /*setTimeout( function() {
        this.GetListencadred();
        this.ngOnInit();
      }
      , 1000);*/
    this.teacherService.sendSMSapi().subscribe((v) => {}, (e) => {}, () => {
      console.log('heyyy aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa baby');
      }
      );


  }

  export() {
    CsvDataService.exportToCsv('encadred', this.Listencadred);
    CsvDataService.exportToCsv('rapported', this.Listrapported);
    CsvDataService.exportToCsv('presedented', this.Listpresented);

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
