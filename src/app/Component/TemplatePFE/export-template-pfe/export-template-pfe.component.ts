import { Component, OnInit } from '@angular/core';
import { TemplatePFE } from 'src/app/Model/template-pfe';
import { TemplatePFEService } from 'src/app/Service/TemplatePFEService/template-pfe.service';

import { Student } from 'src/app/Model/student';

@Component({
  selector: 'app-export-template-pfe',
  templateUrl: './export-template-pfe.component.html',
  styleUrls: ['./export-template-pfe.component.scss']
})
export class ExportTemplatePFEComponent implements OnInit {
  public templatePFE: TemplatePFE = new TemplatePFE();
  public template: string;

  public templateblank: string = "";

  public student : Student = new Student();


  constructor(public templatePFEService:TemplatePFEService) { 
    this.templatePFE = new TemplatePFE();
    this.GetTemplatePFE(16);
    
  }

  ngOnInit() {
  }

  GetTemplatePFE(id : number){

    this.templatePFEService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templatePFE =  data;
      this.templatePFE.site = data.site.id;
      this.template = this.templatePFE.template;
      this.ExportBlankTemplate();
    })

  }

  ExportBlankTemplate(){
    
    this.templateblank =  this.templatePFE.template.replace("{{gradProjectFile.titre}}", "");
    this.templateblank =  this.templateblank.replace(" {{gradProjectFile.description}}", "");
    this.templateblank =  this.templateblank.replace("{{gradProjectFile.problem}}", "");
    this.templateblank =  this.templateblank.replace("{{gradProjectFile.functionnalities}}", "");
    
    
    console.log(this.templateblank);
    this.template = this.templateblank;
  }



}
