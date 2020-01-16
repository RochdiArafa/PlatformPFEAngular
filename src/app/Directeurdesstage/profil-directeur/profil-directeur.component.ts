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
  jj: string;
  mm: string;
  aa: string;
  forme = new FormGroup({
    j: new FormControl(),

  });
  formc = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(8)]),

    file: new FormControl()
  });
  file: File;

  constructor(private modalService: BsModalService, private connecteddirecSer: AuthService, private soutser: SoutenanceService, private ddserv: DirecteurdesstageService) {
    this.directeur = connecteddirecSer.Directeurdesstages;
  }

  ngOnInit() {
  }

  logout() {
    this.connecteddirecSer.DoLogout();
  }

  geresout() {
    this.soutser.gerersoutnonce(this.jj, this.mm, this.aa).subscribe();
  }

  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }

  notifchef() {
    this.ddserv.notifchef().subscribe();
  }

  notifencade() {
    this.ddserv.notifencad().subscribe();
  }

  notifrape() {
    this.ddserv.notifrap().subscribe();
  }

  get namej() {
    return this.forme.get('j');

  }

  get namea() {
    return this.forme.get('a');
  }

  get named() {
    return this.forme.get('d');
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      console.log(file.name);
      this.file = file;
      console.log(this.file.name);
    }
  }

  editer(direc: Directeurdesstages) {
    this.formc.get('firstname').setValue(direc.firstName);
    this.formc.get('lastname').setValue(direc.lastName);
    this.formc.get('email').setValue(direc.email);
    this.formc.get('password').setValue(direc.password);
    this.formc.get('phonenumber').setValue(direc.phoneNumber);
  }

  editer1() {
    this.directeur.firstName = this.formc.value['firstname'];
    this.directeur.lastName = this.formc.value['lastname'];
    this.directeur.email = this.formc.value['email'];
    this.directeur.password = this.formc.value['password'];
    this.directeur.phoneNumber = this.formc.value['phonenumber'];
    this.directeur.image = this.file.name;
    console.log(this.directeur);
    this.ddserv.updatedirecteur(this.directeur).subscribe();
    sessionStorage.setItem('connectedDirecteur', JSON.stringify(this.directeur));

  }

  get namef() {
    return this.formc.get('firstname');
  }

  get namel() {
    return this.formc.get('lastname');
  }

  get namee() {
    return this.formc.get('email');
  }

  get namep() {
    return this.formc.get('password');
  }

  get nameph() {
    return this.formc.get('phonenumber');
  }

  aaa(a: string) {
    console.log(a)
    console.log(a.substring(0, 4));
    console.log((a.substring(5, 7)));
    console.log((a.substring(8, 10)));
    this.aa = a.substring(0, 4);
    this.mm = a.substring(5, 7);
    this.jj = a.substring(8, 10)


  }
}

