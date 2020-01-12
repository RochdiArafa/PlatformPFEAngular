import {Component, OnInit, TemplateRef} from '@angular/core';
import {Ecole} from '../../Models/Ecole';
import {Admin} from '../../Models/Admin';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Router} from '@angular/router';

import {EcoleService} from '../../Services/ecole.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {faEdit, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.scss']
})
export class EcoleComponent implements OnInit {
  addcatIcon = faEdit;
  modalRef: BsModalRef;
  file: File ;
  ecoles: Ecole[] = [];
  ecole: Ecole;
  admin: Admin ;
  forme = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    logo: new FormControl('',[Validators.required])
  });
  formadd = new FormGroup({
    nom: new FormControl('',[Validators.required, Validators.minLength(4)]),
    logo: new FormControl('',[Validators.required])
  });

  constructor(private modalService: BsModalService, private connectedAdmin: AuthService, private router: Router,private ecoleser: EcoleService) {}

  ngOnInit() {
    this.ecoleser.getecole().subscribe(data =>{this.ecoles = data ;
      console.log(this.ecoles);});
    console.log(this.admin);
  }
  get namen(){
    return this.formadd.get('nom');
  }
  get namel(){
    return this.formadd.get('logo');
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

  editer(eco: Ecole){
    this.forme.get('nom').setValue(eco.nom);
    this.forme.get('logo').setValue(this.file);
    this.ecole = eco ;
  }
  editer1(){
    this.ecole.nom  = this.forme.value['nom'];
    this.ecole.logo = this.file.name;
    console.log(this.ecole);
    this.ecoleser.editecole(this.ecole).subscribe();
    //  this.ecoleser.getecole().subscribe(data => {this.ecoles = data ;
    //    console.log(this.ecoles);});
  }
  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    // this.add();
  }
  add(){
    this.ecole= new Ecole(this.file.name,this.formadd.value['nom'], null);

    console.log(this.ecole);
    this.ecoleser.addecole(this.ecole).subscribe();
    this.ngOnInit();
  }



}
