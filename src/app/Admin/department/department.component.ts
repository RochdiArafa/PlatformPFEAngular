import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Department} from '../../Models/Department';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {DepartmentService} from '../../Services/department.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Chefdepartement} from '../../Models/Chefdepartement';
import {ChefdepartmentService} from '../../Services/chefdepartment.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departements: Department[] = [] ;
  chefdeps: Chefdepartement[] = [];
  department: Department ;
  modalRef: BsModalRef;
  depform = new FormGroup({
    nom: new FormControl('',[Validators.required, Validators.minLength(4)]),
    code: new FormControl('',[Validators.required, Validators.minLength(2)]),
    chef: new FormControl()
  });
  chefform = new FormGroup({
    chef: new FormControl()
  }) ;
  constructor(private modalService: BsModalService, private connectedAdmin: AuthService, private depservice: DepartmentService, private chefdepservice: ChefdepartmentService) { }

  ngOnInit() {
    this.depservice.getalldepartments().subscribe(data => { this.departements = data ;
      console.log(this.departements)});
    this.chefdepservice.getallchefdeps().subscribe(data =>{ this.chefdeps = data ;
      console.log(this.chefdeps);});
  }

  delete(id: number){
    this.depservice.deletedepartment(id).subscribe();
    this.depservice.getalldepartments().subscribe(data => { this.departements = data ;
      console.log(this.departements)});
  }
  add(){
    this.department = new Department(this.depform.value['nom'],this.depform.value['code'],null,null,null);
    console.log(this.department);
    this.depservice.adddepartment(this.department).subscribe();
    this.depservice.getalldepartments().subscribe(data => { this.departements = data ;
      console.log(this.departements)});
    this.depform.reset();
  }
  get namec(){
    return   this.depform.get('nom');

  }
  get codec(){
    return this.depform.get('code');
  }
  get chefc(){
    return this.chefform.get('chef');

  }
  affecter(idd: number , idchef: number){
    this.depservice.affecterchef(idd, idchef).subscribe();
    this.depservice.getalldepartments().subscribe(data => { this.departements = data ;
      console.log(this.departements)});

    console.log(idchef);


  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);


  }


}
