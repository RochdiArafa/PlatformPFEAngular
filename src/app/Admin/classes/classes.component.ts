import {Component, OnInit, TemplateRef} from '@angular/core';
import {Classes} from '../../Models/Classes';
import {Admin} from '../../Models/Admin';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Router} from '@angular/router';
import {ClassesService} from '../../Services/classes.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons/faSearchPlus';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  serchtext: string;
  serchicone= faSearchPlus;
  classes: Classes[] = [];
  modalRef: BsModalRef;
  admin: Admin;
  classe: Classes  ;
  formc = new FormGroup({
    nom : new FormControl('',[Validators.required]),
    nbr : new FormControl('', [Validators.required])
  });
  forme = new FormGroup({
    nom : new FormControl('',[Validators.required]),
    nbr : new FormControl('', [Validators.required])
  });
  constructor(private modalService: BsModalService, private connectedAdmin: AuthService, private router: Router, private classeser: ClassesService) { }

  ngOnInit() {
    this.classeser.getallclasses().subscribe(data =>{this.classes = data;
      console.log(this.classes); })
  }
  delete(id: number){
    this.classeser.deleteclassebyid(id).subscribe();
    this.ngOnInit();  }

  get namec(){
    return  this.formc.get('nom');
  }
  get nbrc(){
    return this.formc.get('nbr');
  }
  add(){
    this.classe = new Classes(null,this.formc.value['nom'],this.formc.value['nbr'],null);
    console.log(this.classe);
    this.classeser.addclasse(this.classe).subscribe( );

      this.classeser.getallclasses().subscribe(data =>{this.classes = data;
        console.log(this.classes); });
      this.formc.reset();


  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  //  this.add();
  }
  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    // this.add();
  }
  edite(classe: Classes){
    this.forme.get('nom').setValue(classe.nomclasse);
    this.forme.get('nbr').setValue(classe.nbretudiant);
    this.classe = classe;}

  edite1(){
    this.classe.nbretudiant=this.forme.value['nbr'];
    this.classe.nomclasse=this.forme.value['nom'];
    console.log(this.classe);
    this.classeser.editclasse(this.classe).subscribe();
    this.classeser.getallclasses().subscribe(data =>{this.classes = data;
      console.log(this.classes); })
  }

}
