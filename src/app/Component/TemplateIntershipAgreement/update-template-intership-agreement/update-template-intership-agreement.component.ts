import { Component, OnInit } from '@angular/core';
import { TemplateIntershipAgreement } from 'src/app/Models/template-intership-agreement';
import { TemplateIntershipAgreementService } from 'src/app/Services/TemplateIntershipAgreementService/template-intership-agreement.service';
import { IntershipAgreement } from 'src/app/Models/intership-agreement';
import { Site } from 'src/app/Models/site';
import { DirecteurdesstageService } from 'src/app/Services/directeurdesstage.service';

@Component({
  selector: 'app-update-template-intership-agreement',
  templateUrl: './update-template-intership-agreement.component.html',
  styleUrls: ['./update-template-intership-agreement.component.scss']
})
export class UpdateTemplateIntershipAgreementComponent implements OnInit {

  public templateIntershipAgreement: TemplateIntershipAgreement ;
  public intershipAgreement:IntershipAgreement;
  showerrornom : boolean = false;
  showerrorprenom : boolean = false;
  showerrorcompany : boolean = false;
  showerrordatedebut : boolean = false;
  showerrordatefin : boolean = false;
  site : Site;
  constructor(public templateIntershipAgreementService:TemplateIntershipAgreementService , public directeurService : DirecteurdesstageService) { 
    this.templateIntershipAgreement = new TemplateIntershipAgreement();
    this.intershipAgreement = new IntershipAgreement();
    this.getSite(parseInt(sessionStorage.getItem('idUser')));
  }

  ngOnInit() {
    
  }


  updateTemplatePFE(){
    var error = 0;
    var ch  = this.templateIntershipAgreement.template;
    if( ch.indexOf("{{student.nom}}")== -1 ){
      this.showerrornom = true;
      error++;
    }  
    else
      this.showerrornom = false;  

    if( ch.indexOf("{{student.prenom}}")== -1 ){
      this.showerrorprenom = true;
      error++;
    }  
    else
      this.showerrorprenom = false; 
      
    if( ch.indexOf("{{company.nom}}")== -1 ){
      this.showerrorcompany = true;
      error++;
    }
    else
      this.showerrorcompany = false; 
      
    if( ch.indexOf("{{intershipAgreement.beginningDate}}")== -1 ){
      this.showerrordatedebut = true;
      error++;
    }
    else
      this.showerrordatedebut = false; 
      
    if( ch.indexOf("{{intershipAgreement.endingDate}}")== -1 ){
      this.showerrordatefin = true;
      error++;
      }
    else
      this.showerrordatefin = false;   

    if(error == 0){    
      var ch = this.templateIntershipAgreement.template;
      for (let index = 0; index < ch.length; index++) {
        ch = ch.replace("&nbsp;"," ")    
      }
      this.templateIntershipAgreement.template = ch;
      
      this.templateIntershipAgreementService.modifier(this.templateIntershipAgreement).subscribe((data: any)=>{
        console.log(data);
      }) 
    }
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

  getSite(directeurid){
    this.directeurService.getSite(directeurid).subscribe((data: any)=>{
      console.log("siteeeeeeeeeeeeeee");

      console.log(data);
      this.site = data;

      if(this.site.templateIntershipAgreement == null){

      }  
      else{
        this.templateIntershipAgreement = this.site.templateIntershipAgreement;
        this.templateIntershipAgreement.site = this.site.id;
      }
    }) 
  }

}
