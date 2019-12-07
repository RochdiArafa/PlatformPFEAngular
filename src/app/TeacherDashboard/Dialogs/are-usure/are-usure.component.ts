import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-are-usure',
  templateUrl: './are-usure.component.html',
  styleUrls: ['./are-usure.component.scss']
})
export class AreUSureComponent implements OnInit {

  constructor(public dialogAreUsure: MatDialogRef<AreUSureComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  yes() {
    this.dialogAreUsure.close('yes');
  }
  no() {
    this.dialogAreUsure.close('no');
  }

}
