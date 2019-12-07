import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Directeurdesstages} from '../../Models/Directeurdesstages';
import {SoutenanceService} from '../../Services/soutenance.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {DirecteurdesstageService} from '../../Services/directeurdesstage.service';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faAmbulance} from '@fortawesome/free-solid-svg-icons/faAmbulance';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profil-directeur',
  templateUrl: './profil-directeur.component.html',
  styleUrls: ['./profil-directeur.component.scss']
})
export class ProfilDirecteurComponent implements OnInit {
  directeur: Directeurdesstages;
  modalRef: BsModalRef;
  addcatIcon = faPlusCircle;
  notifIcon = faAmbulance;
  jj: number[]=[ 1 , 2 , 3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  mm:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  aa:number[]=[2019,2020,2021,2022,2023,204,2025,206,2027,2028,2029,2030,];
  forme= new FormGroup({
    j: new FormControl(),
    d: new FormControl(),
    a: new FormControl()
  })
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

}

