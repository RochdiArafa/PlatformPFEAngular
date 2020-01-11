import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DirectorService} from '../../Services/director.service';
import {NavigationDirectorService} from '../../Services/navigation-director.service';
import { GradeFileModel } from '../../Models/GradeFile.Model';
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-list-gradfile',
  templateUrl: './list-gradfile.component.html',
  styleUrls: ['./list-gradfile.component.scss']
})
export class ListGradfileComponent implements OnInit {

	listFiles : GradeFileModel[];
	listUndoneFiles : GradeFileModel[];
	private readonly notifier: NotifierService;

	FilesForm=new FormGroup(
	{
		'etat': new FormControl('',Validators.required),
		'pays': new FormControl('',Validators.required),
		'year': new FormControl('',Validators.pattern('^20[0-9][0-9]-20[0-9][0-9]$'))
	}
	);
	mailForm=new FormGroup(
	{
		'motif': new FormControl('',Validators.required)
	}
	);

  constructor(private route: Router, private navDirector: NavigationDirectorService, private directorSer: DirectorService,notifierService: NotifierService) 
  { 
  		this.notifier = notifierService;
  }

  get etatC(){
  	return this.FilesForm.get('etat');
  }

  get paysC(){
  	return this.FilesForm.get('pays');
  }
  get yearC(){
  	return this.FilesForm.get('year');
  }

  get motifC(){
  	return this.mailForm.get('motif');
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
				() => {this.ngOnInit();
				this.notifier.notify("success", "La fiche accepté a été transférer au chef de departement");}
				);
	}
  refuseFile(g:GradeFileModel){
		this.directorSer.RefuseFile(g).subscribe(
				result => {console.log(result)},
				error=> {},
				() => {this.ngOnInit();
					this.notifier.notify("info", "Un mail de rejet de fiche a été envoyé à l'etudiant destinataire");}
				);
	}
	openForm(id:number){
		document.getElementById("myForm"+id).style.display = "block";
	}
	closeForm(id:number){
		document.getElementById("myForm"+id).style.display = "none";
	}

	acceptReset(g:GradeFileModel){
		this.directorSer.CancelFile(g,"").subscribe(
				result => {console.log(result)},
				error=> {},
				() => {this.ngOnInit();
					this.notifier.notify("info", "Demande d'annulation accepté, la fiche a été archivé");}
				);
	}
	refuseReset(g:GradeFileModel){
		this.directorSer.CancelFile(g,this.mailForm.value.motif).subscribe(
				result => {console.log(result)},
				error=> {},
				() => {this.ngOnInit();
					this.notifier.notify("success", "Le mail a été envoyé à l'etudiant destinataire");}
				);
	}
}
