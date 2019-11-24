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
      //this.GetAllStudent(1);
     // this.getAllStudentRecrutedByContryByYear("paris" , 2019 , 1);
     //this.getAllStudentRecrutedoverContry(1);

     //this.getNbStageParCategorie(1,1);

    this.getRecrutedCompayByOrder(1);

   }

  ngOnInit() {
  }

  GetAllStudent(site_id : number){

    this.studentService.getAllStudent(site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStudent = data;
    })
  }

  getAllStudentRecrutedByContryByYear(contry , year , site_id){
    this.studentService.getAllStudentRecrutedByContryByYear(contry , year , site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStudent = data;
    })
  }

  getAllStudentRecrutedoverContry(site_id){
    this.studentService.getAllStudentRecrutedoverContry(site_id).subscribe((data: any)=>{
      console.log(data);
      this.ListStudent = data;
    })
  }

  public getNbStageParCategorie(site_id:number , category_id : number){

    this.categoryService.getNbStageParCategorie(site_id,category_id).subscribe((data: any)=>{
      console.log(data);
    })  
  }

  public getRecrutedCompayByOrder(site_id:number){

    this.companyService.getRecrutedCompayByOrder(site_id).subscribe((data: any)=>{
      console.log(data);
    })    }

}
