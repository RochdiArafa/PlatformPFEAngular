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
  listComplanyStage : object[];
  constructor(private studentService : StudentService , private companyService:CompanyService) {

  }

  ngOnInit() {
    this.getRecrutedCompayByOrder(1);

  }
  

  public getRecrutedCompayByOrder(site_id:number){

    this.companyService.getRecrutedCompayByOrder(site_id).subscribe((data: any)=>{
      //console.log(data[0][0].gmName);
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

}
