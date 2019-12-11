import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChefDepService} from '../../Services/ChefDep.service';

@Component({
  selector: 'app-details2dialog',
  templateUrl: './details2dialog.component.html',
  styleUrls: ['./details2dialog.component.scss']
})
export class Details2dialogComponent implements OnInit {
  selectedOption: number;

  constructor(public dialogRef: MatDialogRef<Details2dialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any , private ChefService: ChefDepService) { }

  ngOnInit() {
  }

  modifierencadrant(id: number) {
    this.ChefService.ModifierEncadrant(id, this.selectedOption).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
        this.dialogRef.close('ahla');
      }
    );
  }

}
