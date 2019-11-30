import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Service/Student/student.service';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { CompanyService } from 'src/app/Service/Company/company.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student : Student;
  ListStudent : Student[];
  constructor(public studentService :StudentService , public categoryService:CategoryService , public companyService :CompanyService) {
      this.GetAllStudent(1);

   }

  ngOnInit() {
  }

  GetAllStudent(site_id : number){

    this.studentService.getAllStudent(site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStudent = data;
    })
  }

}
