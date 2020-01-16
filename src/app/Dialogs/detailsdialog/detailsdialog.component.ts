import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChefDepService} from '../../Services/ChefDep.service';

@Component({
  selector: 'app-detailsdialog',
  templateUrl: './detailsdialog.component.html',
  styleUrls: ['./detailsdialog.component.scss']
})
export class DetailsdialogComponent implements OnInit {
  selectedOption: number;
  idt: number;
  idst: any;
  constructor(public dialogRef: MatDialogRef<DetailsdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private chefService: ChefDepService) { }
  ngOnInit() {
  }

  modifierrapporteur(ids: number) {
    this.chefService.ModifierRapporteur(ids, this.selectedOption).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
        this.dialogRef.close('ahla');
      }
    );
  }
}
