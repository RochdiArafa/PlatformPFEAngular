import { Component, OnInit } from '@angular/core';
import { TemplatePFE } from 'src/app/Model/template-pfe';
import { TemplatePFEService } from 'src/app/Service/TemplatePFEService/template-pfe.service';
import { GradProjectFile } from 'src/app/Model/grad-project-file';

@Component({
  selector: 'app-export-data-fiche-pfe',
  templateUrl: './export-data-fiche-pfe.component.html',
  styleUrls: ['./export-data-fiche-pfe.component.scss']
})
export class ExportDataFichePFEComponent implements OnInit {

  public templatePFE: TemplatePFE = new TemplatePFE();
  public gradProjectFile : GradProjectFile;
  public template: string;

  public templateNotblank: string = "";

  constructor(public templatePFEService:TemplatePFEService) { 
    this.templatePFE = new TemplatePFE();
    this.gradProjectFile = new GradProjectFile();
    this.GetTemplatePFE(16);
    this.gradProjectFile.title = "developement d'une pplateform de stage pfe";
    this.gradProjectFile.description = "description developement d'une pplateform de stage pfe";
    this.gradProjectFile.problem = "problem 1 ";
    this.gradProjectFile.functionnalities = "gestion etudiant , gestion classe , gestion salle , gestion user";

  }

  ngOnInit() {
  }

  
  GetTemplatePFE(id : number){

    this.templatePFEService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templatePFE =  data;
      this.templatePFE.site = data.site.id;
      this.template = this.templatePFE.template;
      this.ExportStudentTemplate();
    })

  }

  ExportStudentTemplate(){
    this.templateNotblank =  this.templatePFE.template.replace("{{gradProjectFile.titre}}", this.gradProjectFile.title);
    this.templateNotblank =  this.templateNotblank.replace(" {{gradProjectFile.description}}", this.gradProjectFile.description);
    this.templateNotblank =  this.templateNotblank.replace("{{gradProjectFile.problem}}", this.gradProjectFile.problem);
    this.templateNotblank =  this.templateNotblank.replace("{{gradProjectFile.functionnalities}}", this.gradProjectFile.functionnalities);
    console.log(this.templateNotblank);
    this.template = this.templateNotblank;
  }

}
