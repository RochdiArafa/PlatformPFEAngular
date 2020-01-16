import { Component, OnInit } from '@angular/core';
import {Details2dialogComponent} from '../../../Dialogs/details2dialog/details2dialog.component';
import {Student} from '../../../Models/student';
import {DetailsdialogComponent} from '../../../Dialogs/detailsdialog/detailsdialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ConfirmationComponent} from '../../../Dialogs/confirmation/confirmation.component';
import {TeacherModel} from '../../../Models/Teacher.Model';
import {GradeFileModel} from '../../../Models/GradeFile.Model';
import {ChefDepService} from '../../../Services/ChefDep.service';

@Component({
  selector: 'app-students-config',
  templateUrl: './students-config.component.html',
  styleUrls: ['./students-config.component.scss']
})
export class StudentsConfigComponent implements OnInit {
  ListeTeachers: TeacherModel[] = [];
  ListeStudentsSansencad: Student[] = [];
  ListeStudentsavecrapp: Student[] = [];
  ListeStudentssansrapp: Student[] = [];
  ListeStudentavecEncadrant: Student[] = [];
  ListeAllPfe: GradeFileModel[] = [];
  idst: number;
  idt: number;
  hidden: true;
  constructor(private chefService: ChefDepService , public dialog: MatDialog, private details: MatDialog, private details2: MatDialog) { }

  ngOnInit() {
    this.GetallTeachers();
    this.GetallStudentssansencad();
    this.GetallStudentsAvecRapp();
    this.GetAllStudentsSansRapp();
    this.Getstudentavecencadrant();
    this.getAllPfe();
  }
  GetallTeachers() {
    this.chefService.getAllTeachers().subscribe((value) => {
      this.ListeTeachers = value;
    }, error => {}, () => {console.log(this.ListeTeachers); });
  }
  getAllPfe()  {
    this.chefService.getAllPfe().subscribe((value) => {
      this.ListeAllPfe = value;
    }, error => {}, () => {console.log(this.ListeAllPfe); });
  }
  GetAllStudentsSansRapp() {
    this.chefService.getStudentsSansRapporteur().subscribe((value) => {
      this.ListeStudentssansrapp = value;
    }, error => {}, () => {console.log(this.ListeStudentssansrapp); });
  }
  Getstudentavecencadrant()  {
    this.chefService.getStudentavecencadrant().subscribe((value) => {
      this.ListeStudentavecEncadrant = value;
    }, error => {}, () => {console.log(this.ListeStudentavecEncadrant); });
  }
  GetallStudentssansencad() {
    this.chefService.getStudentsSansEncadrant().subscribe((value) => {
      this.ListeStudentsSansencad = value;
    }, error => {}, () => {console.log(this.ListeStudentsSansencad); });
  }
  GetallStudentsAvecRapp() {
    this.chefService.getStudentsAvecRapporteur().subscribe((value) => {
      this.ListeStudentsavecrapp = value;
    }, error => {}, () => {console.log(this.ListeStudentsavecrapp); });
  }
  hiddentrue() {
    return true;
  }
  clickRapporter(idS: number) {
    console.log(this.chefService.RapporterEtudiant(idS));
    this.chefService.RapporterEtudiant(idS).subscribe(
      () => {
        this.ngOnInit();
      }
    );
    this.dialog.open(ConfirmationComponent);
  }
  clickEncadrer(idS: number) {
    console.log(this.chefService.EncadrerEtudiant(idS));
    this.chefService.EncadrerEtudiant(idS).subscribe(
      () => {
        this.ngOnInit();
      }
    );
    this.dialog.open(ConfirmationComponent);
  }

  openrapporteurdetailsdialog(objj: Student) {
    const dialogConfigg = new MatDialogConfig();
    dialogConfigg.data = {
      student: objj,
      title: 'Détails de l étudiant et rapporteur'
    };
    this.details.open(DetailsdialogComponent, { width: '800px', maxHeight: '900px',
      data: {student: objj,
        teachers: this.ListeTeachers,
        listepfe: this.ListeAllPfe}
    });
    this.details.afterAllClosed.subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
      // this.animal = result;
    });
  }

  openrapporteurdetails2dialog(obj: Student) {
    console.log(JSON.stringify(this.ListeAllPfe));
    this.details2.open(Details2dialogComponent, { width: '800px', maxHeight: '900px',
      data: {student: obj,
        teachers: this.ListeTeachers,
        listepfe: this.ListeAllPfe
      }
    });
    this.details2.afterAllClosed.subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
      // this.animal = result;
    });
  }
}
