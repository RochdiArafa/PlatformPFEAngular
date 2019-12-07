import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DirectorService} from '../../Services/director.service';
import {NavigationDirectorService} from '../../Services/navigation-director.service';
import {StudentModel} from '../../Models/Student.Model';


@Component({
  selector: 'app-students-without-file',
  templateUrl: './students-without-file.component.html',
  styleUrls: ['./students-without-file.component.scss']
})
export class StudentsWithoutFileComponent implements OnInit {

	listWithoutPfe: StudentModel[] = [];

	constructor(private route: Router, private navDirector: NavigationDirectorService, private directorSer: DirectorService) { }

	WithoutFilesForm=new FormGroup(
	{
		'searchType': new FormControl('',Validators.required),
		'oneyeartext': new FormControl('',Validators.pattern('^20[0-9][0-9]-20[0-9][0-9]$')),
		'yeartext2': new FormControl('',Validators.pattern('^20[0-9][0-9]-20[0-9][0-9]$'))
	}
	);

get oneyeartextC()
{
  return this.WithoutFilesForm.get('oneyeartext');
}
get yeartext2C()
{
  return this.WithoutFilesForm.get('yeartext2');
}
get searchTypeC()
{
  return this.WithoutFilesForm.get('searchType');
}

DisplayStudents(){
	let list: StudentModel[]= [];
	this.directorSer.getListeSansFiche(this.WithoutFilesForm.value.oneyeartext).subscribe(
		value => {list = value;},
		error1 => {},
		() => {this.listWithoutPfe=list;});
	if(this.WithoutFilesForm.value.yeartext2 != ""){
		this.directorSer.getListeSansFichePeriode(this.WithoutFilesForm.value.oneyeartext,this.WithoutFilesForm.value.yeartext2).subscribe(
		value => {list = value;},
		error1 => {},
		() => {this.listWithoutPfe=list;});
	}
}

  /*GetRapportedFiles() {
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
  }*/

  ngOnInit() {
  }

}
