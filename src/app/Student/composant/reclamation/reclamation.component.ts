import { Component, OnInit } from '@angular/core';
import {Recla} from '../../../Models/recla';
import {AuthService} from '../../../Services/AuthentificationUser/auth.service';
import {ChefDepService} from '../../../Services/ChefDep.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../../Models/student';
import {Notification} from '../../../Models/notification';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  student: Student ;
  public rec: Recla;
  notifs: Notification[] = [] ;
  i: number;
  subj: string;
  descc: string;
  userform = new FormGroup( {
    sujet: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    type: new FormControl()
  });
  constructor(private auth: AuthService, private chefdep: ChefDepService) {
  }

  ngOnInit() {
    this.student =  this.auth.Student;
    this.getallnotifsbystudent();
  }
  getallnotifsbystudent() {
    this.chefdep.getnotifbystudent(this.student.id).subscribe((value) => {
      this.notifs = value;
    }, error => {}, () => {console.log(this.notifs); });
  }

  validerform() {
    // this.i = this.userform.controls.type.value;
    // this.subj = this.userform.controls.sujet.value;
    // this.descc = this.userform.controls.description.value;
    this.rec = new Recla();
    this.rec.contenu = this.userform.controls.description.value;
    this.rec.sujet = this.userform.controls.sujet.value;
    this.rec.type = this.userform.controls.type.value;
    this.rec.traite = false;
    this.chefdep.addRec(this.rec, this.student.id).subscribe(
      () => {},
      error => {},
      () => this.ngOnInit()
      );
    console.log(this.rec);
  }
}
