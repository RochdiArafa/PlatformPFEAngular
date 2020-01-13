import { Component, OnInit } from '@angular/core';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Services/TemplateIntershipAgreementService/template-intership-agreement.service';
import { Site } from 'src/app/Models/site';
import { DirecteurdesstageService } from 'src/app/Services/directeurdesstage.service';

@Component({
  selector: 'app-export-template-fiche',
  templateUrl: './export-template-fiche.component.html',
  styleUrls: ['./export-template-fiche.component.scss']
})
export class ExportTemplateFicheComponent implements OnInit {
  public templateIntershipAgreement: TemplateIntershipAgreement = new TemplateIntershipAgreement();
  public template: string;

  public templateblank: string = "";
  public site : Site;
  public showExport : boolean = true;

  constructor(public templateIntershipAgreementService:TemplateIntershipAgreementService , public directeurService : DirecteurdesstageService) { 
    this.templateIntershipAgreement = new TemplateIntershipAgreement();
    this.getSite(parseInt(sessionStorage.getItem('idUser')));
    
  }

  ngOnInit() {
  }

  GetTemplatePFE(id : number){

    this.templateIntershipAgreementService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templateIntershipAgreement =  data;
      this.templateIntershipAgreement.site = parseInt(sessionStorage.getItem('connectedSite'));
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

  getSite(directeurid){
    this.directeurService.getSite(directeurid).subscribe((data: any)=>{
      console.log("siteeeeeeeeeeeeeee");

      console.log(data);
      this.site = data;

      if(this.site.templateIntershipAgreement == null){
        this.showExport = false;
      }  
      else{
        this.GetTemplatePFE(this.site.templateIntershipAgreement.id);
        this.showExport = true;

      }
    }) 
  }


}
