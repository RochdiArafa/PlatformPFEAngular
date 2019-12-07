import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Services/AuthentificationUser/auth.service';
import {TeacherService} from '../../../Services/teacher.service';
import {GradeFileModel} from '../../../Models/GradeFile.Model';
import { faCoffee, faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  // Fontawsome Api
  FaSuitCase = faSuitcase;
  //
  captnbencadrantfile = 0;
  captnbrapportedfile = 0;
  captnbPresedentfile = 0;
  captnbtotalfile = 0;
  captnbWorkingOn = 0 ;

  constructor(private connectedTeacherSer: AuthService, private TeacherSer: TeacherService ) { }

  ngOnInit() {


    this.GetEncadredFiles();
    this.GetRapportedFiles();
    this.GetpresedentFiles();
    this.GetWorkingOnFiles();
    // this.captnbtotalfile = this.captnbencadrantfile + this.captnbrapportedfile + this.captnbPresedentfile;
  }

  GetEncadredFiles() {
    let list: GradeFileModel[] = [];
    // console.log('id: ' + this.connectedTeacherSer.Teacher.id);
    this.TeacherSer.getNbOfAllEncadred(Number(this.connectedTeacherSer.Teacher.id)).subscribe(
      value => {list = value; },
      error1 => {},
      () => {
        this.captnbencadrantfile = list.length;
        this.captnbtotalfile += list.length;
      }
    );
  }

  GetRapportedFiles() {
    let list: GradeFileModel[] = [];
    // console.log('id: ' + this.connectedTeacherSer.Teacher.id);
    this.TeacherSer.getNbOfAllRapported(Number(this.connectedTeacherSer.Teacher.id)).subscribe(
      value => {list = value; },
      error1 => {},
      () => {
        this.captnbtotalfile += list.length;
        this.captnbrapportedfile = list.length;
      }
    );
  }

  GetpresedentFiles() {
    let list: GradeFileModel[] = [];
    // console.log('id: ' + this.connectedTeacherSer.Teacher.id);
    this.TeacherSer.getNbOfAllPresedent(Number(this.connectedTeacherSer.Teacher.id)).subscribe(
      value => {list = value; },
      error1 => {},
      () => {
        this.captnbtotalfile += list.length;
        this.captnbPresedentfile = list.length;
      }
    );
  }

  GetWorkingOnFiles() {
    let list: GradeFileModel[] = [];
    // console.log('id: ' + this.connectedTeacherSer.Teacher.id);
    this.TeacherSer.getlNbOfWoringOn(Number(this.connectedTeacherSer.Teacher.id)).subscribe(
      value => {list = value; },
      error1 => {},
      () => {
        //this.captnbtotalfile += list.length;
        this.captnbWorkingOn = list.length;
      }
    );
  }


}
