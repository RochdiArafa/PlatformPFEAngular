import { Component, OnInit } from '@angular/core';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Services/TemplateIntershipAgreementService/template-intership-agreement.service';

@Component({
  selector: 'app-export-template-fiche',
  templateUrl: './export-template-fiche.component.html',
  styleUrls: ['./export-template-fiche.component.scss']
})
export class ExportTemplateFicheComponent implements OnInit {
  public templateIntershipAgreement: TemplateIntershipAgreement = new TemplateIntershipAgreement();
  public template: string;

  public templateblank: string = "";

  constructor(public templateIntershipAgreementService:TemplateIntershipAgreementService) { 
    this.GetTemplatePFE(27);
    
  }

  ngOnInit() {
  }

  GetTemplatePFE(id : number){

    this.templateIntershipAgreementService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templateIntershipAgreement =  data;
      this.templateIntershipAgreement.site = data.site.id;
      this.template = this.templateIntershipAgreement.template;
      this.ExportBlankTemplate();
    })

  }

  ExportBlankTemplate(){
    
    this.templateblank =  this.templateIntershipAgreement.template.replace("{{student.nom}}", "");
    this.templateblank =  this.templateblank.replace("{{student.prenom}}", "");
    this.templateblank =  this.templateblank.replace("{{intershipAgreement.beginningDate}}", "");
    this.templateblank =  this.templateblank.replace("{{intershipAgreement.endingDate}}", "");
    this.templateblank =  this.templateblank.replace("{{company.nom}}", "");

    console.log(this.templateblank);
    this.template = this.templateblank;
  }


}
