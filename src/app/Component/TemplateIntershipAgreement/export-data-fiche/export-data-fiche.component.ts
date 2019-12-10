import { Component, OnInit } from '@angular/core';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Services/TemplateIntershipAgreementService/template-intership-agreement.service';
import { Student } from 'src/app/Models/student';
import { IntershipAgreement } from 'src/app/Models/intership-agreement';
import { Company } from 'src/app/Models/company';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/Student/student.service';

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

  constructor(public templateIntershipAgreementService:TemplateIntershipAgreementService , public activatedRoute:ActivatedRoute , public studentService : StudentService) { 
    this.student = new Student();
    this.company = new Company();
    this.intershipAgreement = new IntershipAgreement();

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getStudentByID(id);
      });




  }

  ngOnInit() {
  }

  
  GetTemplatePFE(id : number){

    this.templateIntershipAgreementService.search(id).subscribe((data: any)=>{
      this.templateIntershipAgreement =  data;
      this.templateIntershipAgreement.site = parseInt(sessionStorage.getItem('connectedSite'));
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

    this.template = this.templateNotblank;
  }

  public getStudentByID(id){
    this.studentService.getStudent(id).subscribe((data: any)=>{
      console.log(data);
      this.student = data;
      this.GetTemplatePFE(27);


      this.student.lastName = this.student.firstName;
      this.student.firstName = this.student.lastName;
  
      this.company.gmName  =this.student.pfeFile.company.gmName;
      this.intershipAgreement.beginningDate = "06/04/2020";
      this.intershipAgreement.endingDate = "12/10/2020";
    })
  }

}
