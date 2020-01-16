import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/Student/student.service';
import { Directeurdesstages } from 'src/app/Models/Directeurdesstages';
import { DirecteurdesstageService } from 'src/app/Services/directeurdesstage.service';
import { Site } from 'src/app/Models/site';

@Component({
  selector: 'app-dashboard-internship-director',
  templateUrl: './dashboard-internship-director.component.html',
  styleUrls: ['./dashboard-internship-director.component.scss']
})
export class DashboardInternshipDirectorComponent implements OnInit {
  ListStudent : Student[];
  SansStage : number = 0 ;
  constructor(public studentService :StudentService , public directeurStageService : DirecteurdesstageService) { }

  ngOnInit() {
    
    this.GetAllStudent(parseInt(sessionStorage.getItem('connectedSite')));

  }

  GetAllStudent(site_id : number){

    this.studentService.getAllStudent(site_id).subscribe((data: any)=>{
      this.ListStudent = data;
      this.ListStudent.forEach(etudiant => {
        if(etudiant.pfeFile == null)
          this.SansStage = this.SansStage + 1;
      });
    })
  }





}
