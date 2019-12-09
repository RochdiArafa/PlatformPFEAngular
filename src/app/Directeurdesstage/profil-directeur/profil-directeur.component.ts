import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Directeurdesstages} from '../../Models/Directeurdesstages';
import {SoutenanceService} from '../../Services/soutenance.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {DirecteurdesstageService} from '../../Services/directeurdesstage.service';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faAmbulance} from '@fortawesome/free-solid-svg-icons/faAmbulance';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profil-directeur',
  templateUrl: './profil-directeur.component.html',
  styleUrls: ['./profil-directeur.component.scss']
})
export class ProfilDirecteurComponent implements OnInit {
  directeur: Directeurdesstages;
  modalRef: BsModalRef;
  addcatIcon = faPlusCircle;
  addcatIcone = faEdit;
  notifIcon = faAmbulance;
  jj: number[]=[ 1 , 2 , 3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  mm:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  aa:number[]=[2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,];
  forme= new FormGroup({
    j: new FormControl(),
    d: new FormControl(),
    a: new FormControl()
  });
  formc = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    phonenumber: new FormControl('',[Validators.required, Validators.minLength(8)]),

    file: new FormControl()
  });
  file: File ;
  constructor(private modalService: BsModalService,private connecteddirecSer: AuthService , private soutser: SoutenanceService , private ddserv: DirecteurdesstageService) { this.directeur= connecteddirecSer.Directeurdesstages;}

  ngOnInit() {
  }
  logout(){
    this.connecteddirecSer.DoLogout();
  }
  geresout(aa: number,mm : number, jj: number ){
    this.soutser.gerersoutnonce(jj, mm, aa).subscribe();
  }
  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }
  notifchef(){
    this.ddserv.notifchef().subscribe();
  }
  notifencade(){
    this.ddserv.notifencad().subscribe();
  }
  notifrape(){
    this.ddserv.notifrap().subscribe();
  }
  get namej(){
    return    this.forme.get('j');

  }
  get namea(){
    return this.forme.get('a');
  }
  get named(){
    return this.forme.get('d');
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

  editer(direc: Directeurdesstages){
    this.formc.get('firstname').setValue(direc.firstName);
    this.formc.get('lastname').setValue(direc.lastName);
    this.formc.get('email').setValue(direc.email);
    this.formc.get('password').setValue(direc.password);
    this.formc.get('phonenumber').setValue(direc.phoneNumber);
  }
  editer1(){
    this.directeur.firstName=this.formc.value['firstname'];
    this.directeur.lastName=this.formc.value['lastname'];
    this.directeur.email=this.formc.value['email'];
    this.directeur.password=this.formc.value['password'];
    this.directeur.phoneNumber=this.formc.value['phonenumber'];
    this.directeur.image=this.file.name;
    console.log(this.directeur);
      this.ddserv.updatedirecteur(this.directeur).subscribe();
    sessionStorage.setItem('connectedDirecteur', JSON.stringify(this.directeur));

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

