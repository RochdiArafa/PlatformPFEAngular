import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Directeurdesstages} from '../../Models/Directeurdesstages';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChefdepartmentService} from '../../Services/chefdepartment.service';
import {DirecteurdesstageService} from '../../Services/directeurdesstage.service';

@Component({
  selector: 'app-directeur',
  templateUrl: './directeur.component.html',
  styleUrls: ['./directeur.component.scss']
})
export class DirecteurComponent implements OnInit {
  directeurs: Directeurdesstages[]=[];
  directeur: Directeurdesstages;
  modalRef: BsModalRef;
  addcatIcon = faPlusCircle;
  constructor(private direcserv: DirecteurdesstageService, private modalService: BsModalService) { }
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
    this.direcserv.getalldirecteurdesstages().subscribe(data=>{this.directeurs=data;
    console.log(data);});
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
 //   this.add();

  }

  add(){
    this.directeur= new Directeurdesstages(this.file.name,this.formc.value['phonenumber'],null,this.formc.value['firstname'],this.formc.value['lastname'],this.formc.value['password'],
      this.formc.value['email']);
    console.log(this.directeur);
    this.direcserv.adddirecteur(this.directeur).subscribe();
    this.ngOnInit();
  }
  delete(id: number){
    this.direcserv.deletedirecteur(id).subscribe();
    this.ngOnInit();
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
