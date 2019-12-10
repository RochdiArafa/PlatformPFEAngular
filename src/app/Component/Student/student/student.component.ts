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
  searchStudent : Student[];
  search : boolean = false;
  searchValue : string;
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

  onChange($event){
    console.log(this.searchValue);
    this.searchStudent =  [];
    if(this.searchValue == '')
      this.search = false;
    else
      this.search = true;
      
    for (let index = 0; index < this.ListStudent.length; index++) {
      if(this.ListStudent[index].firstName.indexOf(this.searchValue)!=-1 || this.ListStudent[index].lastName.indexOf(this.searchValue)!=-1 || this.ListStudent[index].email == this.searchValue )
        this.searchStudent.push(this.ListStudent[index]);
    }

  }

  checkStage(student : Student){
    if(student.pfeFile == null)
      return false;
    else
      return true;  
  }

}
