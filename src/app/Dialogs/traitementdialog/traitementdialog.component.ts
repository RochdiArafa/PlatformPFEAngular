import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChefDepService} from '../../Services/ChefDep.service';

@Component({
  selector: 'app-traitementdialog',
  templateUrl: './traitementdialog.component.html',
  styleUrls: ['./traitementdialog.component.scss']
})
export class TraitementdialogComponent implements OnInit {
  selectedOption: number;

  constructor(public dialogRef: MatDialogRef<TraitementdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private chefService: ChefDepService) { }

  ngOnInit() {
  }

  changerrapporteur(id: number, idrec: number) {
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
  refuserreclamation(id: number) {
    this.chefService.traiterreclamation(id).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
        this.dialogRef.close('ahla');
      }
    );
  }
}
