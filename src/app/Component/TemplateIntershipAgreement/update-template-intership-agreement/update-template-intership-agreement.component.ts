import { Component, OnInit } from '@angular/core';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Services/TemplateIntershipAgreementService/template-intership-agreement.service';
import { IntershipAgreement } from 'src/app/Models/intership-agreement';

@Component({
  selector: 'app-update-template-intership-agreement',
  templateUrl: './update-template-intership-agreement.component.html',
  styleUrls: ['./update-template-intership-agreement.component.scss']
})
export class UpdateTemplateIntershipAgreementComponent implements OnInit {

  public templateIntershipAgreement: TemplateIntershipAgreement ;
  public intershipAgreement:IntershipAgreement;

  constructor(public templateIntershipAgreementService:TemplateIntershipAgreementService) { 
    this.templateIntershipAgreement = new TemplateIntershipAgreement();
    this.intershipAgreement = new IntershipAgreement();
    this.GetTemplatePFE(27);
  }

  ngOnInit() {
    
  }


  updateTemplatePFE(){
    var ch = this.templateIntershipAgreement.template;
    for (let index = 0; index < ch.length; index++) {
      ch = ch.replace("&nbsp;"," ")    
    }
    this.templateIntershipAgreement.template = ch;
    
    this.templateIntershipAgreementService.modifier(this.templateIntershipAgreement).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  
  GetTemplatePFE(id : number){

    this.templateIntershipAgreementService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templateIntershipAgreement =  data;
      this.templateIntershipAgreement.site = data.site.id;
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
