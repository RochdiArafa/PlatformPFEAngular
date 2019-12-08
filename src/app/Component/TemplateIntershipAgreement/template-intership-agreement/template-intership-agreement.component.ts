import { Component, OnInit } from '@angular/core';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Services/TemplateIntershipAgreementService/template-intership-agreement.service';

@Component({
  selector: 'app-template-intership-agreement',
  templateUrl: './template-intership-agreement.component.html',
  styleUrls: ['./template-intership-agreement.component.scss']
})
export class TemplateIntershipAgreementComponent implements OnInit {
  templateIntershipAgreement : TemplateIntershipAgreement = new TemplateIntershipAgreement();
  showAddTemplate : boolean;
  showUpdateTemplate : boolean;

  constructor(public templateIntershipAgreementService:TemplateIntershipAgreementService ) { 
    if(this.templateIntershipAgreement == null){
      this.showAddTemplate = true;
      this.showUpdateTemplate = false;
    }  
    else{
      this.showAddTemplate = false;
      this.showUpdateTemplate = true;
    }

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
    this.templateIntershipAgreement.site = 1;

    this.templateIntershipAgreementService.ajouter(this.templateIntershipAgreement).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  updateTemplateIntershipAgreement(){
    this.templateIntershipAgreement = new TemplateIntershipAgreement();
    this.templateIntershipAgreement.id=7;
    this.templateIntershipAgreement.template = "angular updated";
    this.templateIntershipAgreement.site = 1;

    this.templateIntershipAgreementService.modifier(this.templateIntershipAgreement).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

}
