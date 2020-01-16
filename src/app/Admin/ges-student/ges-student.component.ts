import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Student1} from '../../Models/Student1';
import {StudentService} from '../../Services/student.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons/faSearchPlus';

@Component({
  selector: 'app-ges-student',
  templateUrl: './ges-student.component.html',
  styleUrls: ['./ges-student.component.scss']
})
export class GesStudentComponent implements OnInit {
  serchtext: string;
  p: number;
  modalRef: BsModalRef;
  serchicone= faSearchPlus;
  addcatIcon = faPlusCircle;
  student: Student1;
  students: Student1[]=[];
  constructor(private studentser: StudentService, private modalService: BsModalService) { }

  file: File ;
  formc = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    phonenumber: new FormControl('',[Validators.required, Validators.minLength(8)]),

    file: new FormControl()
  });

  ngOnInit() {
    this.studentser.getallstudent().subscribe(data=>{this.students=data;
      console.log(this.students);});
  }
  onFileChange(event){
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      console.log(file.name);
      this.file= file ;
      console.log(this.file.name);
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  add(){
    this.student= new Student1(this.file.name,this.formc.value['phonenumber'],null,this.formc.value['firstname'],this.formc.value['lastname'],this.formc.value['password'],
      this.formc.value['email']);
    console.log(this.student);
    this.studentser.addstudent(this.student).subscribe();
    this.formc.reset();
    this.studentser.getallstudent().subscribe(data=>{this.students=data;
      console.log(this.students)});

  }
  delete(id: number){
    this.studentser.deletestudent(id).subscribe();
    this.studentser.getallstudent().subscribe(data=>{this.students=data;
      console.log(this.students)});

  }

  get namef(){
    return  this.formc.get('firstname');
  }
  get namel(){
    return  this.formc.get('lastname');
  }
  get namee(){
    return this.formc.get('email');
  }
  get namep () {
    return this.formc.get('password');
  }
  get nameph () {
    return this.formc.get('phonenumber');
  }


}
