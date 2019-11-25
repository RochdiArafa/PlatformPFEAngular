import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../../assets/canvasjs.min'
import { StudentService } from 'src/app/Service/Student/student.service';
import { CompanyService } from 'src/app/Service/Company/company.service';
import { Student } from 'src/app/Model/student';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  student : Student;
  ListStudent : Student[];
  ListStudentoverContry : Student[];
  //ListStudent : Student[];

  listComplanyStage : object[];
  constructor(private studentService : StudentService , private companyService:CompanyService) {

  }

  ngOnInit() {
    this.getRecrutedCompayByOrder(1);
    this.GetAllStudent(1);
    this.getAllStudentRecrutedoverContry(1);
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
        dataPoints: [
          { y: 0, label: "" },
          { y: 0, label: "" },
          { y: 0, label: "" },
          { y: 0, label: "" },
          { y: 0, label: "" },
          /*
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" }
          */
        ]
      }]
    });

    chart.render();

    for (let index = 0; index < this.listComplanyStage.length; index++) {
      if(index<=4){
      chart.data[0].dataPoints[index].y=this.listComplanyStage[index][1];
      chart.data[0].dataPoints[index].label=this.listComplanyStage[index][0].gmName;
      }
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
        toolTipContent: "<b>{name}</b>: Etudiant(s) {y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 0, name: "" },
          { y: 0, name: "" },

        ]
      }]
    });
      
    chart.render();

      chart.data[0].dataPoints[0].y=this.ListStudent.length;
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

}
