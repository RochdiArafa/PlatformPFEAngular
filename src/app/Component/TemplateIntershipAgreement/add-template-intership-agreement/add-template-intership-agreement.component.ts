import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Services/TemplateIntershipAgreementService/template-intership-agreement.service';


@Component({
  selector: 'app-add-template-intership-agreement',
  templateUrl: './add-template-intership-agreement.component.html',
  styleUrls: ['./add-template-intership-agreement.component.scss']
})
export class AddTemplateIntershipAgreementComponent implements OnInit {

  public templateIntershipAgreement: TemplateIntershipAgreement ;
  constructor(public TemplateIntershipAgreementService:TemplateIntershipAgreementService) { 
    this.templateIntershipAgreement = new TemplateIntershipAgreement();
  }

  ngOnInit() {
  }

  addTemplatePFE(){
    var ch = this.templateIntershipAgreement.template;
    for (let index = 0; index < ch.length; index++) {
      ch = ch.replace("&nbsp;"," ")    
    }
    this.templateIntershipAgreement.template = ch;

    this.templateIntershipAgreement.site= 1;
    this.TemplateIntershipAgreementService.ajouter(this.templateIntershipAgreement).subscribe((data: any)=>{
      console.log(data);
      this.templateIntershipAgreement = new TemplateIntershipAgreement();
    }) 
  }

  copyMessage(val: string){
    if(val == "nom")
      val = "{{student.nom}}";
    if(val == "prenom")
      val = "{{student.prenom}}";
    if(val == "datedebut")
      val = "{{intershipAgreement.beginningDate}}";
    if(val == "datefin")
      val = "{{intershipAgreement.endingDate}}";
    if(val == "entreprise")
      val = "{{company.nom}}";  
      
      
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
