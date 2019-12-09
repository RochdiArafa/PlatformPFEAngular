import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Admin} from '../../Models/Admin';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../Services/admin.service';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.scss']
})
export class ProfilAdminComponent implements OnInit {
  modalRef: BsModalRef;
  addcatIcone = faEdit;
  admin: Admin;
  url= 'assets/img/mohamedazizchaouch.jpg';

  formc = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    phonenumber: new FormControl('',[Validators.required, Validators.minLength(8)]),

    file: new FormControl()
  });
  file: File ;
  constructor(private modalService: BsModalService, private connectedadminSer: AuthService, private adminserv :AdminService) {this.admin= this.connectedadminSer.Admin;
  }

  ngOnInit() {
  }
  logout(){
    //disconecttttttfsdfsdfsd
    this.connectedadminSer.DoLogout();
    console.log('hhhh');

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
  editer(direc: Admin){
    this.formc.get('firstname').setValue(direc.firstName);
    this.formc.get('lastname').setValue(direc.lastName);
    this.formc.get('email').setValue(direc.email);
    this.formc.get('password').setValue(direc.password);
    this.formc.get('phonenumber').setValue(direc.phoneNumber);
  }
  editer1(){
    this.admin.firstName=this.formc.value['firstname'];
    this.admin.lastName=this.formc.value['lastname'];
    this.admin.email=this.formc.value['email'];
    this.admin.password=this.formc.value['password'];
    this.admin.phoneNumber=this.formc.value['phonenumber'];
    this.admin.image=this.file.name;
    console.log(this.admin);
    this.adminserv.updateadmin(this.admin).subscribe();
    sessionStorage.setItem('connectedDirecteur', JSON.stringify(this.admin));

  }
  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }


}
