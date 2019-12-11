import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../../assets/canvasjs.min'
import { StudentService } from 'src/app/Services/Student/student.service';
import { CompanyService } from 'src/app/Services/Company/company.service';
import { Student } from 'src/app/Models/student';
import * as $ from 'jquery';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { StageParCategory } from 'src/app/Models/stage-par-category';


@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  student : Student;
  ListStudent : Student[];
  ListStudentoverContry : Student[];
  ListStageParCategory : StageParCategory[];

  listComplanyStage : object[];
  SansStage : number = 0;
  constructor(private studentService : StudentService , private companyService:CompanyService , private categoryService:CategoryService) {
    this.getRecrutedCompayByOrder(parseInt(sessionStorage.getItem('connectedSite')));
    this.GetAllStudent(parseInt(sessionStorage.getItem('connectedSite')));
    this.StageParCategory(parseInt(sessionStorage.getItem('connectedSite')));
  }

	ngOnInit() {


  }
  

  public getRecrutedCompayByOrder(site_id:number){
    this.companyService.getRecrutedCompayByOrder(site_id).subscribe((data: any)=>{
      console.log(data);
      this.listComplanyStage = data;
      this.showStatic();

    })    
  }

  
  GetAllStudent(site_id : number){
    this.studentService.getAllStudent(site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStudent = data;
      this.getAllStudentRecrutedoverContry(parseInt(sessionStorage.getItem('connectedSite')));
      this.ListStudent.forEach(etudiant => {
        if(etudiant.pfeFile == null)
          this.SansStage = this.SansStage + 1;
      });
    })
  }

  showStatic(){
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "les entreprises les plus recrutés"
      },
      data: [{
        type: "column",
        //showInLegend: true,
        toolTipContent: "{y} Etudiant(s)",
        indexLabel: "{label} a {y} etudiant(s)",
        dataPoints: [
        ]
      }]
    });

    chart.render();

    for (let index = 0; index < this.listComplanyStage.length; index++) {
      chart.data[0].dataPoints.push({
        y: this.listComplanyStage[index][1],
        label: this.listComplanyStage[index][0].gmName
        });
    }

    chart.render();

  }


  showStaticCircle(){
    let chart = new CanvasJS.Chart("chartCircleContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "les etudiants qui faisent leur stage à l'etranger"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} Etudiant(s) (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 0, name: "" },
          { y: 0, name: "" },

        ]
      }]
    });
      
    chart.render();

      chart.data[0].dataPoints[0].y=this.ListStudent.length - this.SansStage;
      chart.data[0].dataPoints[0].name="Tunis";

      chart.data[0].dataPoints[1].y=this.ListStudentoverContry.length;
      chart.data[0].dataPoints[1].name="Etranger";


    chart.render();
  }


  getAllStudentRecrutedByContryByYear(contry , year , site_id){
    this.studentService.getAllStudentRecrutedByContryByYear(contry , year , site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStudentoverContry = data;
    })
  }

  getAllStudentRecrutedoverContry(site_id){
    this.studentService.getAllStudentRecrutedoverContry(site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStudentoverContry = data;
      this.showStaticCircle();

    })
  }

  ShowStaticStageParCategory(){
    let dataPoints = [];
    let chart = new CanvasJS.Chart("livechartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Nombre de stage par categorie"
      },
      data: [{
        type: "column",
        //showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} Stage(s)",
        indexLabel: "{y} stage(s) {label}",
        dataPoints: [
        ]
      }]
    });

    chart.render();

    for (let index = 0; index < this.ListStageParCategory.length; index++) {
      chart.data[0].dataPoints.push({
        y: this.ListStageParCategory[index].nbstage,
        label: this.ListStageParCategory[index].category
        });
    }

    chart.render();
  }

  StageParCategory(site_id){
    this.categoryService.getStageParCategorie(site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStageParCategory = data;
      this.ShowStaticStageParCategory();
    })
  }

}
