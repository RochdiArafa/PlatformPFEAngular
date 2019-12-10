import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/Student/student.service';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { CompanyService } from 'src/app/Services/Company/company.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student : Student;
  ListStudent : Student[];
  constructor(public studentService :StudentService , public categoryService:CategoryService , public companyService :CompanyService) {
    this.GetAllStudent(parseInt(sessionStorage.getItem('connectedSite')));
    

   }

  ngOnInit() {
  }

  GetAllStudent(site_id : number){

    this.studentService.getAllStudent(site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStudent = data;
    })
  }

  ExportTemplatePFE(){
    
  }

  ExportTemplateConvention(){

  }

}
