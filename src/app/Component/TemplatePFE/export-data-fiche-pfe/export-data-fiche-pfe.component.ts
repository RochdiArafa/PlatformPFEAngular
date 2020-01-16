import { Component, OnInit } from '@angular/core';
import { TemplatePFE } from 'src/app/Models/template-pfe';
import { TemplatePFEService } from 'src/app/Services/TemplatePFEService/template-pfe.service';
import { GradProjectFile } from 'src/app/Models/grad-project-file';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/Student/student.service';

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
  public student : Student = new Student();
  constructor(public templatePFEService:TemplatePFEService , public activatedRoute:ActivatedRoute , public studentService : StudentService) { 
    this.templatePFE = new TemplatePFE();
    this.gradProjectFile = new GradProjectFile();
    
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getStudentByID(id);
      });


  }

  ngOnInit() {
  }

  
  GetTemplatePFE(id : number){

    this.templatePFEService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templatePFE =  data;
      this.templatePFE.site = parseInt(sessionStorage.getItem('connectedSite'));
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

  public getTemplateBySiteId(id){

  }

  public getStudentByID(id){
    this.studentService.getStudent(id).subscribe((data: any)=>{
      console.log(data);
      this.student = data;
      this.GetTemplatePFE(4);

      this.gradProjectFile.title = this.student.pfeFile.title;
      this.gradProjectFile.description = this.student.pfeFile.description;
      this.gradProjectFile.problem = this.student.pfeFile.problem;
      this.gradProjectFile.functionnalities = this.student.pfeFile.functionnalities;
    })
  }


}
