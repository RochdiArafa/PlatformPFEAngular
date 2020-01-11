import { Component, OnInit } from '@angular/core';
import { TemplatePFE } from 'src/app/Models/template-pfe';
import { TemplatePFEService } from 'src/app/Services/TemplatePFEService/template-pfe.service';

import { Student } from 'src/app/Models/student';
import { Site } from 'src/app/Models/site';
import { DirecteurdesstageService } from 'src/app/Services/directeurdesstage.service';

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
  public site : Site;
  public showExport : boolean = true;

  constructor(public templatePFEService:TemplatePFEService , public directeurService : DirecteurdesstageService) { 
    this.templatePFE = new TemplatePFE();
    this.getSite(parseInt(sessionStorage.getItem('idUser')));
  }

  ngOnInit() {
  }

  GetTemplatePFE(id : number){

    this.templatePFEService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templatePFE =  data;
      this.templatePFE.site = parseInt(sessionStorage.getItem('connectedSite'));
      this.template = this.templatePFE.template;
      console.log(this.template);
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


  getSite(directeurid){
    this.directeurService.getSite(directeurid).subscribe((data: any)=>{
      console.log("siteeeeeeeeeeeeeee");

      console.log(data);
      this.site = data;

      if(this.site.templatePFE == null){
        this.showExport = false;
      }  
      else{
        this.GetTemplatePFE(this.site.templatePFE.id);
        this.showExport = true;

      }
    }) 
  }

}
