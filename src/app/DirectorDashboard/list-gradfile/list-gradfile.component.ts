import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DirectorService} from '../../Services/director.service';
import {NavigationDirectorService} from '../../Services/navigation-director.service';
import { GradeFileModel } from '../../Models/GradeFile.Model';

@Component({
  selector: 'app-list-gradfile',
  templateUrl: './list-gradfile.component.html',
  styleUrls: ['./list-gradfile.component.scss']
})
export class ListGradfileComponent implements OnInit {

	listFiles : GradeFileModel[];
	listUndoneFiles : GradeFileModel[];

	FilesForm=new FormGroup(
	{
		'etat': new FormControl('',Validators.required),
		'pays': new FormControl('',Validators.required),
		'year': new FormControl('',Validators.pattern('^20[0-9][0-9]-20[0-9][0-9]$'))
	}
	);

  constructor(private route: Router, private navDirector: NavigationDirectorService, private directorSer: DirectorService) { }

  get etatC(){
  	return this.FilesForm.get('etat');
  }

  get paysC(){
  	return this.FilesForm.get('pays');
  }
  get yearC(){
  	return this.FilesForm.get('year');
  }

  ngOnInit() {
  	this.FilesForm.get('etat').setValue("encours");
  	this.DisplayFiles()
  }

  DisplayFiles(){
	let list: GradeFileModel[]= [];
	this.directorSer.getListFiles(this.FilesForm.value.etat,this.FilesForm.value.pays,this.FilesForm.value.year).subscribe(
		value => {list = value;},
		error1 => {},
		() => {this.listFiles=list;});
	}

  acceptFile(g:GradeFileModel){
		this.directorSer.AcceptFile(g).subscribe(
				result => {console.log(result)},
				error=> {},
				() => {this.ngOnInit();}
				);
	}
  refuseFile(g:GradeFileModel){
		this.directorSer.RefuseFile(g).subscribe(
				result => {console.log(result)},
				error=> {},
				() => {this.ngOnInit();}
				);
	}

}
