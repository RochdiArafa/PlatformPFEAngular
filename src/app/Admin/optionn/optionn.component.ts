import {Component, OnInit, TemplateRef} from '@angular/core';
import {Option} from '../../Models/Option';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Admin} from '../../Models/Admin';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {Router} from '@angular/router';
import {OptionssService} from '../../Services/optionss.service';

@Component({
  selector: 'app-optionn',
  templateUrl: './optionn.component.html',
  styleUrls: ['./optionn.component.scss']
})
export class OptionnComponent implements OnInit {
  options: Option[] = [] ;
  modalRef: BsModalRef;
  admin: Admin;
  option: Option;
  formc = new FormGroup({
    nom : new FormControl('',[Validators.required])
  });
  constructor(private modalService: BsModalService, private connectedAdmin: AuthService, private router: Router,private optser: OptionssService) { }

  ngOnInit() {
    this.optser.getalloptions().subscribe(data=>{this.options=data;
      console.log(this.options) });
  }
  delete(id: number){
    this.optser.deleteoptionbyid(id).subscribe();
    this.optser.getalloptions().subscribe(data=>{this.options=data;
      console.log(this.options) });
  }
  get namec(){
    return  this.formc.get('nom');
  }
  add(){
    this.option = new Option(null,this.formc.value['nom'],null);
    console.log(this.option);
    this.optser.addoption(this.option).subscribe();
    this.optser.getalloptions().subscribe(data=>{this.options=data;
      console.log(this.options) });

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
   // this.add();

  }
  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
   // this.add();
  }

}
