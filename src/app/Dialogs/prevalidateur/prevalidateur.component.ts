import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChefDepService} from '../../Services/ChefDep.service';
import {GradeFileModel} from '../../Models/GradeFile.Model';

@Component({
  selector: 'app-prevalidateur',
  templateUrl: './prevalidateur.component.html',
  styleUrls: ['./prevalidateur.component.scss']
})
export class PrevalidateurComponent implements OnInit {
  selectedOption: number;

  constructor(public dialogRef: MatDialogRef<PrevalidateurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private chefService: ChefDepService) { }

  ngOnInit() {
  }

  affecterprevalidateur(fichepfe: GradeFileModel) {
    this.chefService.affecterprevalidateur(fichepfe.student.id, this.selectedOption).subscribe(
      () => {},
      e => {},
      () => {
        console.log(this.selectedOption);
        this.dialogRef.close('ahla');
      }
    );
  }
}
