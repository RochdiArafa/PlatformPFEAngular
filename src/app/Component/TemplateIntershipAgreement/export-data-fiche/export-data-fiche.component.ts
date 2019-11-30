import { Component, OnInit } from '@angular/core';
import { TemplateIntershipAgreement } from 'src/app/Model/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Service/TemplateIntershipAgreementService/template-intership-agreement.service';
import { Student } from 'src/app/Model/student';
import { IntershipAgreement } from 'src/app/Model/intership-agreement';
import { Company } from 'src/app/Model/company';

@Component({
  selector: 'app-export-data-fiche',
  templateUrl: './export-data-fiche.component.html',
  styleUrls: ['./export-data-fiche.component.scss']
})
export class ExportDataFicheComponent implements OnInit {

  public templateIntershipAgreement: TemplateIntershipAgreement= new TemplateIntershipAgreement();
  public student : Student;
  public intershipAgreement:IntershipAgreement;
  public company:Company;
  public template: string;

  public templateNotblank: string = "";

  constructor(public templateIntershipAgreementService:TemplateIntershipAgreementService) { 
    this.GetTemplatePFE(27);
    this.student = new Student();
    this.company = new Company();
    this.intershipAgreement = new IntershipAgreement();
    this.student.lastName = "arafa";
    this.student.firstName = "rochdi";

    this.company.gmName  ="Familia Chic";

  }

  ngOnInit() {
  }

  
  GetTemplatePFE(id : number){

    this.templateIntershipAgreementService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templateIntershipAgreement =  data;
      this.templateIntershipAgreement.site = data.site.id;
      this.template = this.templateIntershipAgreement.template;
      this.ExportStudentTemplate();
    })

  }

  ExportStudentTemplate(){
    this.templateNotblank =  this.templateIntershipAgreement.template.replace("{{student.nom}}", this.student.lastName);
    this.templateNotblank =  this.templateNotblank.replace("{{student.prenom}}", this.student.firstName);
    this.templateNotblank =  this.templateNotblank.replace("{{intershipAgreement.beginningDate}}", this.intershipAgreement.beginningDate+"");
    this.templateNotblank =  this.templateNotblank.replace("{{intershipAgreement.endingDate}}", this.intershipAgreement.endingDate+"");
    this.templateNotblank =  this.templateNotblank.replace("{{company.nom}}", this.company.gmName);

    console.log(this.templateNotblank);
    this.template = this.templateNotblank;
  }


}
