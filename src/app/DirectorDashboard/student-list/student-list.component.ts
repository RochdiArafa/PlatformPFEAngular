import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DirectorService} from '../../Services/director.service';
import {NavigationDirectorService} from '../../Services/navigation-director.service';
import {StudentModel} from '../../Models/Student.Model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

	list5thGrade: StudentModel[] = [];

  constructor(private route: Router, private navDirector: NavigationDirectorService, private directorSer: DirectorService) { }

  ngOnInit() {
  	this.DisplayStudents();
  }

	DisplayStudents(){
		let list: StudentModel[]= [];
		this.directorSer.getallstudents().subscribe(
			value => {list = value;},
			error1 => {},
			() => {this.list5thGrade=list;
				console.log('you are here bro');
				console.log(this.list5thGrade);});
	}
	enable(stu:StudentModel){
		this.directorSer.enablestudent(stu).subscribe(
			result => {console.log(result)},
			error=> {},
			() => {this.ngOnInit();}
			);
	}
}
