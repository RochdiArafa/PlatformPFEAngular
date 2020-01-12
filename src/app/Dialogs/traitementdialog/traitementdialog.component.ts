import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChefDepService} from '../../Services/ChefDep.service';
import {Notification} from '../../Models/notification';

@Component({
  selector: 'app-traitementdialog',
  templateUrl: './traitementdialog.component.html',
  styleUrls: ['./traitementdialog.component.scss']
})
export class TraitementdialogComponent implements OnInit {
  selectedOption: number;
  public notif: Notification;
  constructor(public dialogRef: MatDialogRef<TraitementdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private chefService: ChefDepService) {
  }

  ngOnInit() {
  }

  changerrapporteur(id: number, idrec: number) {
    console.log(id);
    this.notif = new Notification();
    this.notif.contenu = 'Réclamation acceptée, votre rapporteur a été changé';
    this.chefService.NotifierEtudiant(this.notif, id).subscribe(
      () => {},
      error => {}
    );
    console.log(this.notif);
    this.chefService.ModifierRapporteur(id, this.selectedOption).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
      }
    );
    this.chefService.traiterreclamation(idrec).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
        this.dialogRef.close('ahla');
      }
    );
  }
  changerencadrant(id: number, idrec: number) {
    console.log(id);
    this.notif = new Notification();
    this.notif.contenu = 'Réclamation acceptée, votre encadrant a été changé';
    this.chefService.NotifierEtudiant(this.notif, id).subscribe(
      () => {},
      error => {}
    );
    console.log(this.notif);
    this.chefService.ModifierEncadrant(id, this.selectedOption).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
      }
    );
    this.chefService.traiterreclamation(idrec).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
        this.dialogRef.close('ahla');
      }
    );
  }
  refuserreclamation(id: number, idd: number) {
    console.log(id);
    this.notif = new Notification();
    this.notif.contenu = 'Réclamation refusé';
    this.chefService.NotifierEtudiant(this.notif, id).subscribe(
      () => {},
      error => {}
    );
    console.log(this.notif);
    this.chefService.traiterreclamation(idd).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
        this.dialogRef.close('ahla');
      }
    );
  }
}
