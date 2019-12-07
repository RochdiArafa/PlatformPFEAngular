import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Chefdepartement} from '../../Models/Chefdepartement';
import {ChefdepartmentService} from '../../Services/chefdepartment.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chefdep',
  templateUrl: './chefdep.component.html',
  styleUrls: ['./chefdep.component.scss']
})
export class ChefdepComponent implements OnInit {
  chefdep: Chefdepartement;
  chefdeps: Chefdepartement[]  = [] ;
  modalRef: BsModalRef;
  addcatIcon = faPlusCircle;
  constructor(private depser: ChefdepartmentService, private modalService: BsModalService) { }
  file: File ;
  formc = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phonenumber: new FormControl(),

    file: new FormControl()
  });
  ngOnInit() {
    this.depser.getallchefdeps().subscribe(data =>{this.chefdeps=data;
      console.log(this.chefdeps);});
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
  add(){
    this.chefdep =new Chefdepartement(this.file.name,this.formc.value['phonenumber'],null,this.formc.value['firstname'],this.formc.value['lastname'],this.formc.value['password'],
      this.formc.value['email']);
    console.log(this.chefdep);
    this.depser.addchefdep(this.chefdep).subscribe();
    this.depser.getallchefdeps().subscribe(data =>{this.chefdeps=data;
      console.log(this.chefdeps);});
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.add();

  }
}
