import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Teacher} from '../../Models/teacher';
import {DirecteurdesstageService} from '../../Services/directeurdesstage.service';
import {TeacherService} from '../../Services/teacher.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons/faSearchPlus';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
  serchtext: string ;
  serchicone= faSearchPlus;
  p: number;
  modalRef: BsModalRef;
  addcatIcon = faPlusCircle;
  teacher: Teacher;
  teachers:Teacher[]= [];
  constructor(private teacherser: TeacherService, private modalService: BsModalService, private connectedadminSer: AuthService) { }
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
    this.teacherser.getallteachers().subscribe(data=>{this.teachers=data;
    console.log(this.teachers);});
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
    this.teacher = new Teacher(this.file.name,this.formc.value['phonenumber'],null,this.formc.value['firstname'],this.formc.value['lastname'],this.formc.value['password'],
      this.formc.value['email']);
    console.log(this.teacher);
    this.teacherser.addteachers(this.teacher).subscribe();
  this.teacherser.getallteachers().subscribe(data=>{this.teachers=data;
    console.log(this.teachers);});

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
  logout(){
    //disconecttttttfsdfsdfsd
    this.connectedadminSer.DoLogout();
    console.log('hhhh');

  }



}
