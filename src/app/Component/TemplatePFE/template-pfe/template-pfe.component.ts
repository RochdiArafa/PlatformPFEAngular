import { Component, OnInit } from '@angular/core';
import { TemplatePFEService } from 'src/app/Services/TemplatePFEService/template-pfe.service';
import { TemplatePFE } from 'src/app/Models/template-pfe';
import { Router } from '@angular/router';
import { DirecteurdesstageService } from 'src/app/Services/directeurdesstage.service';
import { Site } from 'src/app/Models/site';

@Component({
  selector: 'app-template-pfe',
  templateUrl: './template-pfe.component.html',
  styleUrls: ['./template-pfe.component.scss']
})
export class TemplatePFEComponent implements OnInit {
  templatePFE : TemplatePFE;
  showAddTemplate : boolean;
  showUpdateTemplate : boolean;
  template : TemplatePFE = new TemplatePFE();
  site : Site;
  constructor(public templatePFEService:TemplatePFEService , public router:Router , public directeurService : DirecteurdesstageService) { 
    this.getSite(sessionStorage.getItem('idUser'));
  }

  ngOnInit() {
  }

  GetTemplatePFE(id : number){

      this.templatePFEService.search(id).subscribe((data: any)=>{
        console.log(data);
        this.templatePFE = data;
      })
  
  }

  deleteTemplatePFE(id:number){
    this.templatePFEService.delete(id).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  addTemplatePFE(){
    this.templatePFE = new TemplatePFE();
    this.templatePFE.template = "angular";
    this.templatePFE.site= parseInt(sessionStorage.getItem('connectedSite'));
    this.templatePFEService.ajouter(this.templatePFE).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  updateTemplatePFE(){
    this.templatePFE = new TemplatePFE();
    this.templatePFE.id=16;
    this.templatePFE.template = "angular updated";
    this.templatePFE.site= parseInt(sessionStorage.getItem('connectedSite'));
    this.templatePFEService.modifier(this.templatePFE).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  getSite(directeurid){
    this.directeurService.getSite(directeurid).subscribe((data: any)=>{
      console.log("siteeeeeeeeeeeeeee");

      console.log(data);
      this.site = data;

      if(this.site.templatePFE == null){
        this.showAddTemplate = true;
        this.showUpdateTemplate = false;
      }  
      else{
        this.showAddTemplate = false;
        this.showUpdateTemplate = true;
      }
    }) 
  }

}
