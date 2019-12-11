import { Component, OnInit } from '@angular/core';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Services/TemplateIntershipAgreementService/template-intership-agreement.service';
import { DirecteurdesstageService } from 'src/app/Services/directeurdesstage.service';
import { Site } from 'src/app/Models/site';

@Component({
  selector: 'app-template-intership-agreement',
  templateUrl: './template-intership-agreement.component.html',
  styleUrls: ['./template-intership-agreement.component.scss']
})
export class TemplateIntershipAgreementComponent implements OnInit {
  templateIntershipAgreement : TemplateIntershipAgreement = new TemplateIntershipAgreement();
  showAddTemplate : boolean;
  showUpdateTemplate : boolean;
  site : Site;

  constructor(public templateIntershipAgreementService:TemplateIntershipAgreementService , public directeurService : DirecteurdesstageService ) { 
    this.getSite(sessionStorage.getItem('idUser'));


  }

  ngOnInit() {
  }

  GetTemplateIntershipAgreement(id : number){

      this.templateIntershipAgreementService.search(id).subscribe((data: any)=>{
        console.log(data);
        this.templateIntershipAgreement = data;
      })
  
  }

  deleteTemplateIntershipAgreement(id:number){
    this.templateIntershipAgreementService.delete(id).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  addTemplateIntershipAgreement(){
    this.templateIntershipAgreement = new TemplateIntershipAgreement();
    this.templateIntershipAgreement.template = "angular";
    this.templateIntershipAgreement.site = parseInt(sessionStorage.getItem('connectedSite'));

    this.templateIntershipAgreementService.ajouter(this.templateIntershipAgreement).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  updateTemplateIntershipAgreement(){
    this.templateIntershipAgreement = new TemplateIntershipAgreement();
    this.templateIntershipAgreement.id=7;
    this.templateIntershipAgreement.template = "angular updated";
    this.templateIntershipAgreement.site = parseInt(sessionStorage.getItem('connectedSite'));

    this.templateIntershipAgreementService.modifier(this.templateIntershipAgreement).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  getSite(directeurid){
    this.directeurService.getSite(directeurid).subscribe((data: any)=>{
      console.log("siteeeeeeeeeeeeeee");

      console.log(data);
      this.site = data;

      if(this.site.templateIntershipAgreement == null){
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
